import { WS_EVENTS } from '@constants/wsEvents';
import { SagaIterator } from '@redux-saga/types';
import { notifications } from '@src/helpers/notifications';
import SocketMaster from '@src/helpers/SocketMaster';
import { call, takeEvery } from 'redux-saga/effects';
import { getCommentsRequest } from './actions';
import { ActionTypes as AT } from './actionTypes';

const { socket } = SocketMaster;

export default function* commentsWatcher(): SagaIterator {
  yield takeEvery(AT.GET_COMMENTS_REQUEST, getCommentsSaga);
}

export function* getCommentsSaga({ payload }: ReturnType<typeof getCommentsRequest>): SagaIterator {
  try {
    yield call([socket, socket.emit], WS_EVENTS.GET_COMMENTS, { post: payload });
  } catch {
    yield call(notifications, { message: 'error' });
  }
}
