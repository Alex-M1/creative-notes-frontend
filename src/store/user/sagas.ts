import { push } from 'react-router-redux';
import { takeEvery, call, put, takeLatest, take } from 'redux-saga/effects';
import { eventChannel, SagaIterator } from 'redux-saga';
import { REQUEST_URLS } from '@constants/requestsUrls';
import { io, Socket } from 'socket.io-client';
import { cookieMaster } from '@helpers/authHelpers';
import {
  checkAuth,
  setIsReady,
  disconnect,
  setUserInfo,
  setInitStatus,
  setCurrentLanguage,
} from './actions';
import { APP_ROUTES } from '../../constants/appRoutes';
import { ActionTypes as AT } from './actionTypes';

export function* watcherUser(): SagaIterator {
  yield takeLatest(AT.USER_CHECK, workerLanguageChecker);
  yield takeEvery(AT.CONTENT_INIT, contentInitHander);
  yield takeEvery(AT.DISCONNECT, disconnectHandler);
}

export let globalSocket: Socket;

export const connect = (token: string): Socket => {
  globalSocket = io(REQUEST_URLS.baseUrl, {
    extraHeaders: {
      Authorization: token,
    },
  });
  globalSocket.on('connection', () => {
    globalSocket.emit('user_info');
  });
  return globalSocket;
};

export const createSocketChannel = (socket: Socket): any => eventChannel((emit) => {
  socket.on('check_auth', authStatus => emit(checkAuth(authStatus)));
  socket.on('user_info', userInfo => emit(setUserInfo(userInfo)));
  return () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    socket.off('check_auth', () => {});
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
