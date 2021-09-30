import { SagaIterator } from '@redux-saga/types';
import { takeEvery, call, put } from 'redux-saga/effects';
import { setIsReady, setCurrentLanguage } from './actions';
import { ActionTypes as AT } from './actionTypes';

export function* watcherUser(): SagaIterator {
  yield takeEvery(AT.USER_CHECK, workerChecker);
}

export function* workerChecker(): SagaIterator {
  try {
    yield put(setIsReady(false));
    const currentLanguage = yield call([localStorage, 'getItem'], 'lang');
    if (currentLanguage) yield put(setCurrentLanguage(currentLanguage));
  } catch (err) {
    yield call([console, 'error'], err);
  }
}
