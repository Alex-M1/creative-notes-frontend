import { push } from 'react-router-redux';
import { takeEvery, call, put, takeLatest, take, select } from 'redux-saga/effects';
import { eventChannel, SagaIterator } from 'redux-saga';
import { REQUEST_URLS } from '@constants/requestsUrls';
import { io, Socket } from 'socket.io-client';
import { cookieMaster, newPasswordValidation, requestUpdateInfoValidation } from '@helpers/authHelpers';
import { APP_ROUTES } from '@constants/appRoutes';
import { WS_EVENTS } from '@constants/wsEvents';
import { MESSAGES } from '@constants/common';
import { getPostTheme, getCreatePostValue, getPage, getFilteredTheme } from '@store/posts/selectors';
import { PER_PAGE, PostStatus } from '@constants/posts';
import { ROLES } from '@constants/roles';
import { notifications } from '@src/helpers/notifications';
import { chooseWSEvent } from '@src/helpers/postsHelper';
import { setPostIsAnonim, setIsSendPost, setPublicPosts, setPrivatePosts, setPendingPosts, changePage } from '../posts/actions';
import { getIsAnonymous, getPendingPosts } from '../posts/selectors';
import { putRequest } from '../../helpers/requestHelpers';
import {
  setUsers,
  setError,
  checkAuth,
  setIsReady,
  emitAction,
  disconnect,
  setUserInfo,
  setInitStatus,
  getUsersRequest,
  rejectPendingPost,
  setCurrentLanguage,
  resolvePendingPost,
  cleanPasswordFields,
  changeUserRole as actionChangeUserRole,
} from './actions';
import { ActionTypes as AT } from './actionTypes';
// eslint-disable-next-line import/no-cycle
import { getUserRole, getOldPassword, getNewPassword, getUserInfo } from './selectors';
import { ActionTypes as PostAT } from '../posts/actionTypes';

export function* watcherUser(): SagaIterator {
  yield takeLatest(AT.USER_CHECK, workerLanguageChecker);
  yield takeEvery(AT.CONTENT_INIT, contentInitHander);
  yield takeEvery(AT.DISCONNECT, disconnectHandler);
  yield takeLatest(AT.EMIT, emitHandler);
  yield takeLatest(AT.CHECK_AUTH, checkAuthHandler);
  yield takeEvery(PostAT.PUBLISH_POST_REQUEST, publishPostRequest);
  yield takeEvery(PostAT.PRIVATE_POST_REQUEST, privatePostRequest);
  yield takeLatest(AT.DELETE_POST, deletePostHandler);
  yield takeLatest(AT.LIKE_POST, likePostHandler);
  yield takeLatest(AT.CHANGE_PASSWORD, changePasswordHandler);
  yield takeLatest(AT.TAKE_FRESH_USER_INFO, freshUserInfoHandler);
  yield takeLatest(AT.SUBMIT_CHANGE_USER_INFO, submitChangeUserInfoHandler);
  yield takeEvery(AT.GET_USERS, getUsers);
  yield takeEvery(AT.CHANGE_USER_ROLE, changeUserRole);
  yield takeEvery(PostAT.CHANGE_PAGE, changePageHandler);
  yield takeEvery(AT.REJECT_PENDING_POST, rejectHandler);
  yield takeEvery(AT.RESOLVE_PENDING_POST, resolveHandler);
}

export let globalSocket: Socket;

export const connect = (token: string): Socket => {
  globalSocket = io(REQUEST_URLS.baseUrl, {
    extraHeaders: {
      Authorization: token,
    },
  });
  globalSocket.on(WS_EVENTS.CONNECTION, () => {
    globalSocket.emit(WS_EVENTS.USER_INFO);
  });
  return globalSocket;
};

export const createSocketChannel = (socket: Socket): any => eventChannel((emit) => {
  socket.on(WS_EVENTS.CHECK_AUTH, authStatus => emit(checkAuth(authStatus)));
  socket.on(WS_EVENTS.USER_INFO, userInfo => emit(setUserInfo(userInfo)));
  socket.on(WS_EVENTS.GET_PUBLIC_POSTS, (publicPosts) => emit(setPublicPosts(publicPosts.message)));
  socket.on(WS_EVENTS.GET_PRIVATE_POSTS, (privatePosts) => emit(setPrivatePosts(privatePosts.message)));
  socket.on(WS_EVENTS.GET_PENDING_POSTS, (pendingPosts) => emit(setPendingPosts(pendingPosts.message)));
  socket.on(WS_EVENTS.EROR, (error) => emit(setError(error)));
  return () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    socket.off(WS_EVENTS.CHECK_AUTH, () => { });
  };
});

export function* contentInitHander(): SagaIterator {
  const token = yield call([cookieMaster, 'getTokenFromCookie']);

  if (!token) return yield put(disconnect());

  const socket = yield call(connect, token);
  const socketChannel = yield call(createSocketChannel, socket);

  yield put(setInitStatus(true));

  while (socketChannel) {
    const payload = yield take(socketChannel);
    yield put(payload);
  }
}

export function* disconnectHandler(): SagaIterator {
  if (globalSocket) yield call([globalSocket, 'disconnect']);
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

export function* emitHandler({ payload }: ReturnType<typeof emitAction>): SagaIterator {
  const theme = yield select(getFilteredTheme);
  const body = {
    page: 1,
    per_page: PER_PAGE,
    theme,
  };
  const token = yield call([cookieMaster, 'getTokenFromCookie']);
  if (!token) yield put(disconnect());
  if (globalSocket) {
    switch (payload) {
      case WS_EVENTS.GET_PUBLIC_POSTS:
        yield call([globalSocket, 'emit'], payload, body);
        break;
      case WS_EVENTS.GET_PRIVATE_POSTS:
        yield call([globalSocket, 'emit'], payload, body);
        break;
      case WS_EVENTS.GET_PENDING_POSTS:
        yield call([globalSocket, 'emit'], payload, body);
        break;
      default:
    }
  }
}

export function* checkAuthHandler({ payload }: ReturnType<typeof checkAuth>): SagaIterator {
  const token = yield call([cookieMaster, 'getTokenFromCookie']);
  if (!token) yield put(disconnect());
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  if (payload !== MESSAGES.SUCCESS) yield put(disconnect());
}

export function* publishPostRequest(): SagaIterator {
  try {
    const postTheme = yield select(getPostTheme);
    const postValue = yield select(getCreatePostValue);
    const isAnonim = yield select(getIsAnonymous);
    const role = yield select(getUserRole);
    const page = yield select(getPage);
    if (!postValue.trim()) {
      return yield call(notifications, { message: 'empty_content' });
    }
    yield put(setIsSendPost(true));
    yield call([globalSocket, 'emit'], WS_EVENTS.CREATE_POST, {
      theme: postTheme,
      content: postValue,
      status: role === ROLES.SUPER_ADMIN ? PostStatus.PUBLIC : PostStatus.PENDING,
      page,
      per_page: PER_PAGE,
      isAnonim,
    });
    yield call(notifications, { type: 'success', message: role === ROLES.SUPER_ADMIN ? 'post_published' : 'pending_post' });
  } catch {
    yield call(notifications, { message: 'error' });
  } finally {
    yield put(setIsSendPost(false));
    yield put(setPostIsAnonim(false));
  }
}

export function* privatePostRequest(): SagaIterator {
  try {
    const postTheme = yield select(getPostTheme);
    const postValue = yield select(getCreatePostValue);
    const page = yield select(getPage);
    if (!postValue.trim()) {
      return yield call(notifications, { message: 'empty_content' });
    }
    yield put(setIsSendPost(true));
    yield call([globalSocket, 'emit'], WS_EVENTS.CREATE_POST, {
      theme: postTheme,
      content: postValue,
      status: PostStatus.PRIVATE,
      page,
      per_page: PER_PAGE,
    });
    yield call(notifications, { type: 'success', message: 'post_published' });
  } catch {
    yield call(notifications, { message: 'error' });
  } finally {
    yield put(setIsSendPost(false));
  }
}
export function* changePageHandler({ payload }: ReturnType<typeof changePage>): SagaIterator {
  try {
    const wsEvent = yield call(chooseWSEvent, payload.postRequestName);
    const theme = yield select(getFilteredTheme);
    yield call([globalSocket, 'emit'], wsEvent, {
      theme,
      page: payload.page,
      per_page: PER_PAGE,
    });
  } catch {
    yield call(notifications, { message: 'error' });
  } finally {
    yield put(setIsSendPost(false));
  }
}
export function* deletePostHandler(): SagaIterator {
  yield call([console, 'log'], 'deletepostLogic');
}

export function* likePostHandler(): SagaIterator {
  yield call([console, 'log'], 'likeLogic');
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
  if (globalSocket) {
    yield call([globalSocket, 'emit'], WS_EVENTS.USER_INFO);
  }
}

export function* getUsers({ payload }: ReturnType<typeof getUsersRequest>): SagaIterator {
  try {
    const token = yield call([cookieMaster, 'getTokenFromCookie']);
    const res = yield call(
      fetch,
      `${REQUEST_URLS.baseUrl}${REQUEST_URLS.get_users}?page=${payload || 1}&per_page=5`,
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

export function* changeUserRole({ payload }: ReturnType<typeof actionChangeUserRole>): SagaIterator {
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

export function* rejectHandler({ payload }: ReturnType<typeof rejectPendingPost>): SagaIterator {
  if (globalSocket) {
    const { page, per_page } = yield select(getPendingPosts);
    yield call([globalSocket, 'emit'], 'upd_pending_post', { postId: payload, status: 'reject', page, per_page });
  }
}

export function* resolveHandler({ payload }: ReturnType<typeof resolvePendingPost>): SagaIterator {
  if (globalSocket) {
    const { page, per_page } = yield select(getPendingPosts);
    yield call([globalSocket, 'emit'], 'upd_pending_post', { postId: payload, status: 'public', page, per_page });
  }
}
