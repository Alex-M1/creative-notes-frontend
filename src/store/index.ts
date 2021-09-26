import { combineReducers } from 'redux';
import { all, fork } from '@redux-saga/core/effects';
import { SagaIterator } from '@redux-saga/types';
import { authReducer } from './auth/reducer';
import { watcherRegistration } from './auth/sagas';

const sagas = [
  watcherRegistration,
];

export function* rootSaga(): SagaIterator {
  yield all(sagas.map(fork));
}

export const rootReducer = combineReducers({
  auth: authReducer,
});
