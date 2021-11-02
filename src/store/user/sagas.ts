import { push } from 'react-router-redux';
import { takeEvery, call, put, takeLatest, take, select } from 'redux-saga/effects';
import { eventChannel, SagaIterator } from 'redux-saga';
import { REQUEST_URLS } from '@constants/requestsUrls';
import { Socket } from 'socket.io-client';
import { cookieMaster, newPasswordValidation, requestUpdateInfoValidation } from '@helpers/authHelpers';
import { APP_ROUTES } from '@constants/appRoutes';
import { WS_EVENTS } from '@constants/wsEvents';
import { MESSAGES } from '@constants/common';
import { notifications } from '@src/helpers/notifications';
import SocketMaster from '@src/helpers/SocketMaster';
import { setComments } from '@store/comments/actions';
import { putRequest } from '@src/helpers/requestHelpers';
import { PER_PAGE } from '@constants/posts';
import { setPublicPosts, setPrivatePosts, setPendingPosts } from '../posts/actions';
import {
  setUsers,
  setError,
  checkAuth,
  setIsReady,
  disconnect,
  setUserInfo,
  setInitStatus,
  getUsersRequest,
  setCurrentLanguage,
  cleanPasswordFields,
  changeUserRole,
} from './actions';
import { ActionTypes as AT } from './actionTypes';
// eslint-disable-next-line import/no-cycle
import { getOldPassword, getNewPassword, getUserInfo } from './selectors';

export function* watcherUser(): SagaIterator {
  yield takeLatest(AT.USER_CHECK, workerLanguageChecker);
  yield takeEvery(AT.CONTENT_INIT, contentInitHander);
  yield takeLatest(AT.CHECK_AUTH, checkAuthHandler);
  yield takeLatest(AT.CHANGE_PASSWORD, changePasswordHandler);
  yield takeLatest(AT.TAKE_FRESH_USER_INFO, freshUserInfoHandler);
  yield takeLatest(AT.SUBMIT_CHANGE_USER_INFO, submitChangeUserInfoHandler);
  yield takeEvery(AT.GET_USERS, getUsersSaga);
  yield takeEvery(AT.DISCONNECT, disconnectHandler);
  yield takeEvery(AT.CHANGE_USER_ROLE, changeUserRoleSaga);
}

export const createSocketChannel = (socket: Socket): any => eventChannel((emit) => {
  socket.on(WS_EVENTS.CHECK_AUTH, authStatus => emit(checkAuth(authStatus)));
  socket.on(WS_EVENTS.USER_INFO, userInfo => emit(setUserInfo(userInfo)));
  socket.on(WS_EVENTS.GET_PUBLIC_POSTS, (publicPosts) => emit(setPublicPosts(publicPosts.message)));
  socket.on(WS_EVENTS.GET_PRIVATE_POSTS, (privatePosts) => emit(setPrivatePosts(privatePosts.message)));
  socket.on(WS_EVENTS.GET_PENDING_POSTS, (pendingPosts) => emit(setPendingPosts(pendingPosts.message)));
  socket.on(WS_EVENTS.GET_COMMENTS, (comments) => emit(setComments(comments.message)));
  socket.on(WS_EVENTS.EROR, (error) => emit(setError(error)));
  return () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    socket.off(WS_EVENTS.CHECK_AUTH, () => { });
  };
});

export function* contentInitHander(): SagaIterator {
  try {
    const { socket } = SocketMaster;
    const token = yield call([cookieMaster, 'getTokenFromCookie']);

    if (!token) return yield put(disconnect());

    const socketChannel = yield call(createSocketChannel, socket);
    while (socketChannel) {
      const payload = yield take(socketChannel);
      yield put(payload);
    }
  } catch (err) {
    yield call([console, 'error'], err);
  }
}

export function* disconnectHandler(): SagaIterator {
  const { socket } = SocketMaster;
  if (socket) yield call([socket, 'disconnect']);

  yield call([cookieMaster, 'deleteTokenFromCookie']);
  yield call([localStorage, 'removeItem'], 'lang');
  yield put(setInitStatus(false));
  yield put(push(APP_ROUTES.LOGIN));
}

export function* workerLanguageChecker(): SagaIterator {
  try {
    yield put(setIsReady(false));

    const currentLanguage = yield call([localStorage, 'getItem'], 'lang');

    if (currentLanguage) yield put(setCurrentLanguage(currentLanguage));

    yield put(setIsReady(true));
  } catch (err) {
    yield call([console, 'error'], err);
  }
}

export function* checkAuthHandler({ payload }: ReturnType<typeof checkAuth>): SagaIterator {
  const token = yield call([cookieMaster, 'getTokenFromCookie']);
  if (!token) yield put(disconnect());
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  if (payload !== MESSAGES.SUCCESS) yield put(disconnect());
}

export function* changePasswordHandler(): SagaIterator {
  const oldPassword = yield select(getOldPassword);
  const newPassword = yield select(getNewPassword);

  const { errorMessage, isValid } = yield call(newPasswordValidation, newPassword);

  if (!isValid) return yield call(notifications, { type: 'error', message: errorMessage });

  const { status, message } = yield call(putRequest, REQUEST_URLS.password_change, { oldPassword, newPassword });

  if (status > 205) return yield call(notifications, { type: 'error', message });
  yield call(notifications, { type: 'success', message });
  yield put(cleanPasswordFields());
  yield put(push(APP_ROUTES.MAIN));
}

export function* freshUserInfoHandler(): SagaIterator {
  const { socket } = SocketMaster;
  if (socket) {
    yield call([socket, 'emit'], WS_EVENTS.USER_INFO);
  }
}

export function* getUsersSaga({ payload }: ReturnType<typeof getUsersRequest>): SagaIterator {
  try {
    const token = yield call([cookieMaster, 'getTokenFromCookie']);
    const res = yield call(
      fetch,
      `${REQUEST_URLS.baseUrl}${REQUEST_URLS.get_users}?page=${payload || 1}&per_page=${PER_PAGE}`,
      {
        headers: {
          Authorization: token,
        },
      },
    );
    const users = yield call([res, 'json']);
    yield put(setUsers(users.message));
  } catch {
    yield call(notifications, { message: 'error' });
  }
}

export function* changeUserRoleSaga({ payload }: ReturnType<typeof changeUserRole>): SagaIterator {
  try {
    yield call(putRequest, REQUEST_URLS.change_user_role, payload);
    yield put(getUsersRequest(1));
  } catch {
    yield call(notifications, { message: 'error' });
  }
}

export function* submitChangeUserInfoHandler(): SagaIterator {
  const { age, city, name, lastName, img } = yield select(getUserInfo);
  const { isValid, errorMessage } = yield call(requestUpdateInfoValidation, { age, city, name, lastName });
  if (!isValid) return yield call(notifications, { type: 'error', message: errorMessage });
  const { status, message } = yield call(putRequest, REQUEST_URLS.update_user_data, { age, city, name, lastName, img });
  if (status > 205) {
    return yield call(notifications, { type: 'error', message });
  }
  yield call(notifications, { type: 'success', message: 'success_changes' });
  yield put(push(APP_ROUTES.MAIN));
}
