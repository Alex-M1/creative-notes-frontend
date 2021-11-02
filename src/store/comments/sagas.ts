import { WS_EVENTS } from '@constants/wsEvents';
import { SagaIterator } from '@redux-saga/types';
import { notifications } from '@src/helpers/notifications';
import SocketMaster from '@src/helpers/SocketMaster';
import { call, select, takeEvery } from 'redux-saga/effects';
import { createCommentRequest, getCommentsRequest, leaveRoomRequest } from './actions';
import { ActionTypes as AT } from './actionTypes';
import { getCommentValue } from './selectors';

export default function* commentsWatcher(): SagaIterator {
  yield takeEvery(AT.GET_COMMENTS_REQUEST, getCommentsSaga);
  yield takeEvery(AT.CREATE_COMMENT_REQUEST, createCommentSaga);
  yield takeEvery(AT.LEAVE_ROOM, leaveRoomSaga);
}

export function* getCommentsSaga({ payload }: ReturnType<typeof getCommentsRequest>): SagaIterator {
  try {
    const { socket } = SocketMaster;
    yield call([socket, socket.emit], WS_EVENTS.GET_COMMENTS, { post: payload.postId });
    if (payload.isJoinRoom) {
      yield call(joinToRoom, payload.postId);
    }
  } catch {
    yield call(notifications, { message: 'error' });
  }
}

export function* leaveRoomSaga({ payload }: ReturnType<typeof leaveRoomRequest>): SagaIterator {
  try {
    const { socket } = SocketMaster;
    yield call([socket, socket.emit], WS_EVENTS.LEAVE_ROOM, { room: payload });
  } catch {
    yield call(notifications, { message: 'error' });
  }
}

export function* joinToRoom(postId: string): SagaIterator {
  try {
    const { socket } = SocketMaster;
    yield call([socket, socket.emit], WS_EVENTS.JOIN_TO_ROOM, { room: postId });
  } catch {
    yield call(notifications, { message: 'error' });
  }
}

export function* createCommentSaga({ payload }: ReturnType<typeof createCommentRequest>): SagaIterator {
  try {
    const { socket } = SocketMaster;
    const content = yield select(getCommentValue);
    yield call([socket, socket.emit], WS_EVENTS.CREATE_COMMENT, { post: payload, content });
  } catch {
    yield call(notifications, { message: 'error' });
  }
}
