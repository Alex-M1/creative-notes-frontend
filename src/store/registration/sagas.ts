import { takeEvery, call, select, put } from 'redux-saga/effects';
import { actionTypes } from './actionTypes';

export function* watcherRegistration(): Generator {
  yield takeEvery(actionTypes.SEND_REGISTRATION_REQUEST, workerRegistration);
}

export function* workerRegistration(): Generator {
  try {
    yield call([console, 'log'], 'registration logic');
  } catch (e) {
    yield call([console, 'error'], e);
  }
}
