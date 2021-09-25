import { SagaIterator } from '@redux-saga/types';
import { takeEvery, call } from 'redux-saga/effects';
import { ActionTypes as AT } from './actionTypes';

export function* watcherRegistration(): SagaIterator {
  yield takeEvery(AT.SEND_REGISTRATION_REQUEST, workerRegistration);
}

export function* workerRegistration(): SagaIterator {
  try {
    yield call([console, 'log'], 'registration logic');
  } catch (err) {
    yield call([console, 'error'], err);
  }
}
