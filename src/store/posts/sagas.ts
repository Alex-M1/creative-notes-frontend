import { SagaIterator } from 'redux-saga';
import { cookieMaster } from '@src/helpers/authHelpers';
import { disconnect } from '@store/user/actions';
import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { WS_EVENTS } from '@constants/wsEvents';
import SocketMaster from '@src/helpers/SocketMaster';
import { getUserRole } from '@store/user/selectors';
import { notifications } from '@src/helpers/notifications';
import { PER_PAGE, PostStatus, ThemesKey } from '@constants/posts';
import { ROLES } from '@constants/roles';
import { chooseWSEvent } from '@src/helpers/postsHelper';
import { getUserLogin } from '../user/selectors';
import { ActionTypes as AT } from './actionTypes';
import {
  getCreatePostValue,
  getFilteredTheme,
  getPage,
  getPendingPosts,
  getPostTheme,
} from './selectors';
import { changePage, emitAction, rejectPendingPost, resolvePendingPost, setIsSendPost, setPendingPosts, setPrivatePosts, setPublicPosts } from './actions';

export function* watcherPosts(): SagaIterator {
  yield takeLatest(AT.EMIT, emitHandler);
  yield takeEvery(AT.PUBLISH_POST_REQUEST, publishPostRequest);
  yield takeEvery(AT.PRIVATE_POST_REQUEST, privatePostRequest);
  yield takeLatest(AT.DELETE_POST, deletePostHandler);
  yield takeLatest(AT.LIKE_POST, likePostHandler);
  yield takeEvery(AT.CHANGE_PAGE, changePageHandler);
  yield takeEvery(AT.REJECT_PENDING_POST, rejectPendingPostSaga);
  yield takeEvery(AT.RESOLVE_PENDING_POST, resolvePendingPostSaga);
}

const { socket } = SocketMaster;

export function* rejectPendingPostSaga({ payload }: ReturnType<typeof rejectPendingPost>): SagaIterator {
  if (socket) {
    const { page, per_page } = yield select(getPendingPosts);
    yield call([socket, 'emit'], 'upd_pending_post', { postId: payload, status: 'reject', page, per_page });
  }
}

export function* resolvePendingPostSaga({ payload }: ReturnType<typeof resolvePendingPost>): SagaIterator {
  if (socket) {
    const { page, per_page } = yield select(getPendingPosts);
    yield call([socket, 'emit'], 'upd_pending_post', { postId: payload, status: 'public', page, per_page });
  }
}
export function* publishPostRequest(): SagaIterator {
  try {
    const postTheme = yield select(getPostTheme);
    const postValue = yield select(getCreatePostValue);
    const role = yield select(getUserRole);
    const page = yield select(getPage);
    if (!postValue.trim()) {
      return yield call(notifications, { message: 'empty_content' });
    }
    yield put(setIsSendPost(true));
    yield call([socket, 'emit'], WS_EVENTS.CREATE_POST, {
      theme: postTheme,
      content: postValue,
      status: role === ROLES.SUPER_ADMIN ? PostStatus.PUBLIC : PostStatus.PENDING,
      page,
      per_page: PER_PAGE,
    });
    yield call(notifications, { type: 'success', message: role === ROLES.SUPER_ADMIN ? 'post_published' : 'pending_post' });
  } catch {
    yield call(notifications, { message: 'error' });
  } finally {
    yield put(setIsSendPost(false));
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
    yield call([socket, 'emit'], WS_EVENTS.CREATE_POST, {
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
    yield call([socket, 'emit'], wsEvent, {
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

export function* likePostHandler({ payload }: ReturnType<typeof likePost>): SagaIterator {
  if (socket) {
    const userLogin = yield select(getUserLogin);
    const { page, per_page } = yield select(getPublicPosts);
    const theme = yield select(getFilteredTheme);

    yield call([socket, 'emit'], 'upd_public_post', { postId: payload, per_page, page, login: userLogin, theme }); 
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
  if (socket) {
    switch (payload) {
      case WS_EVENTS.GET_PUBLIC_POSTS:
        yield call([socket, 'emit'], payload, body);
        break;
      case WS_EVENTS.GET_PRIVATE_POSTS:
        yield call([socket, 'emit'], payload, body);
        break;
      case WS_EVENTS.GET_PENDING_POSTS:
        yield call([socket, 'emit'], payload, body);
        break;
      default:
    }
  }
}
