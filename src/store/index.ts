import { combineReducers } from 'redux';
import { all, fork } from '@redux-saga/core/effects';
import { SagaIterator } from '@redux-saga/types';
import { registrationReducer } from './registration/reducer';
import { watcherRegistration } from './registration/sagas';

const sagas = [
  watcherRegistration,
];

export function* rootSaga(): SagaIterator {
  yield all(sagas.map(fork));
}

export const rootReducer = combineReducers({
  registration: registrationReducer,
});
