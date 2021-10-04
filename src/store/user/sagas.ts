import { push } from 'react-router-redux';
import { takeEvery, call, put, takeLatest, take } from 'redux-saga/effects';
import { eventChannel, SagaIterator } from 'redux-saga';
import { REQUEST_URLS } from '@constants/requestsUrls';
import { io, Socket } from 'socket.io-client';
import { cookieMaster } from '@helpers/authHelpers';
import { APP_ROUTES } from '@constants/appRoutes';
import { WS_EVENTS } from '@constants/wsEvents';
import { defaultPublicPostsBody, MESSAGES } from '@constants/common';
import { setPublicPosts } from '../posts/actions';
import {
  setError,
  checkAuth,
  setIsReady,
  emitAction,
  disconnect,
  setUserInfo,
  setInitStatus,
  setCurrentLanguage,
} from './actions';
import { ActionTypes as AT } from './actionTypes';

export function* watcherUser(): SagaIterator {
  yield takeLatest(AT.USER_CHECK, workerLanguageChecker);
  yield takeEvery(AT.CONTENT_INIT, contentInitHander);
  yield takeEvery(AT.DISCONNECT, disconnectHandler);
  yield takeLatest(AT.EMIT, emitHandler);
  yield takeLatest(AT.CHECK_AUTH, checkAuthHandler);
  yield takeLatest(AT.DELETE_POST, deletePostHandler);
  yield takeLatest(AT.LIKE_POST, likePostHandler);
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
  socket.on(WS_EVENTS.EROR, (error) => emit(setError(error)));
  return () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    socket.off(WS_EVENTS.CHECK_AUTH, () => {});
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
  const token = yield call([cookieMaster, 'getTokenFromCookie']);
  if (!token) yield put(disconnect());
  if (globalSocket) {
    switch (payload) {
      case WS_EVENTS.GET_PUBLIC_POSTS: 
        yield call([globalSocket, 'emit'], payload, defaultPublicPostsBody);
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

export function* deletePostHandler(): SagaIterator {
  yield call([console, 'log'], 'deletepostLogic');
}

export function* likePostHandler(): SagaIterator {
  yield call([console, 'log'], 'likeLogic');
}
