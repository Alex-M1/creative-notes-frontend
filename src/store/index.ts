import { combineReducers } from 'redux';
import { all, fork } from '@redux-saga/core/effects';
import { SagaIterator } from '@redux-saga/types';
import { authReducer } from './auth/reducer';
import { userReducer } from './user/reducer';
import { watcherRegistration } from './auth/sagas';
import { watcherUser } from './user/sagas';
import { watcherNotes } from './notes/sagas';

const sagas = [
  watcherUser,
  watcherNotes,
  watcherRegistration,
];

export function* rootSaga(): SagaIterator {
  yield all(sagas.map(fork));
}

export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});
