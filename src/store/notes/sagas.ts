import { SagaIterator } from '@redux-saga/types';
import { eventChannel } from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import { REQUEST_URLS } from '@constants/requestsUrls';
import { io, Socket } from 'socket.io-client';
import { ActionTypes as AT } from './actionTypes';

export let globalSocket: Socket;

export function* watcherNotes(): SagaIterator {
  yield takeEvery(AT.INIT, notesInitHandler);
}

export const connect = (token: string): Promise<any> => {
  globalSocket = io(REQUEST_URLS.baseUrl, {
    extraHeaders: {
      Authorization: token,
    } });
  return new Promise((resolve) => {
    globalSocket.on('connect', () => {
      globalSocket.emit('userInfo', token);
      resolve(globalSocket);
    });
  });
};

export const createSocketChannel = (socket: Socket): any => eventChannel((emit) => {
  socket.on('check_auth', data => emit(actionCheckAuth(data)));
  return () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    socket.off('check_auth', () => {});
  };
});

export function* notesInitHandler(): SagaIterator {
  
}
