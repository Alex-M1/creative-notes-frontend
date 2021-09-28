import { IReturnedAction } from '@store/types';
import { SagaIterator } from '@redux-saga/types';
import { takeEvery, call } from 'redux-saga/effects';
import { AuthPages } from '@constants/auth';
import { API_ROUTES } from '@constants/appRoutes';
import { ActionTypes as AT } from './actionTypes';
import { IAuthSumbitPayload } from './types';

export function* watcherRegistration(): SagaIterator {
  yield takeEvery(AT.AUTH_SUBMIT, submitHandler);
}

export function* submitHandler({ payload }: IReturnedAction<IAuthSumbitPayload>): SagaIterator {
  try {
    const { currentPage, push } = payload;
    switch (currentPage) {
      case AuthPages.auth: yield call(loginHandler, push);
        break;
      case AuthPages.registration: yield call(registrationHandler, push);
        break;
      default: return;
    }
  } catch (err) {
    yield call([console, 'error'], err);
  }
}

export function* registrationHandler(push: IAuthSumbitPayload['push']): SagaIterator {
  try {
    yield call(push, API_ROUTES.auth.authorization);
  } catch (err) {
    yield call([console, 'error'], err);
  }
}

export function* loginHandler(push: IAuthSumbitPayload['push']): SagaIterator {
  try {
    yield call(push, API_ROUTES.auth.registration);
  } catch (err) {
    yield call([console, 'error'], err);
  }
}
