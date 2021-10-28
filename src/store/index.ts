import { combineReducers } from 'redux';
import { all, fork } from '@redux-saga/core/effects';
import { SagaIterator } from '@redux-saga/types';
import { routerReducer } from 'react-router-redux';
import { authReducer } from './auth/reducer';
import { userReducer } from './user/reducer';
import { postsReducer } from './posts/reducer';
import { watcherAuth } from './auth/sagas';
import { watcherUser } from './user/sagas';
import { watcherPosts } from './posts/sagas';

const sagas = [
  watcherUser,
  watcherAuth,
  watcherPosts,
];

export function* rootSaga(): SagaIterator {
  yield all(sagas.map(fork));
}

export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  router: routerReducer,
  posts: postsReducer,
});
