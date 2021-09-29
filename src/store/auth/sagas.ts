import { IReturnedAction } from '@store/types';
import { SagaIterator } from '@redux-saga/types';
import { takeEvery, call, select, put } from 'redux-saga/effects';
import { AuthPages } from '@constants/auth';
import { API_ROUTES, APP_ROUTES } from '@constants/appRoutes';
import { loginPasswordValues, regValues } from '@store/auth/selectors';
import { registrationValidation } from '@helpers/authHelpers';
import { setIsReady } from '@store/user/actions';
import { notifications } from '@helpers/notifications';
import { clearAuthInputsValues } from '@store/auth/actions';
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
    yield put(setIsReady(false));
    const registrationValues = yield select(regValues);
    const { errorMessage, isValid } = yield call(registrationValidation, registrationValues);
    if (!isValid) return yield call(notifications, { type: 'error', message: errorMessage });
    const registrationBody = yield select(loginPasswordValues);
    const requestAnswer = yield call(fetch, 'http://localhost:3000/api/registration', {
      body: JSON.stringify(registrationBody), 
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (requestAnswer.status === 201) {
      yield call(notifications, { type: 'error', message: 'success_registration' });
      yield put(clearAuthInputsValues());
      yield call(push, APP_ROUTES.LOGIN);
    } else {
      const { message } = yield call([requestAnswer, 'json']);
      return yield call(notifications, { type: 'error', message });
    }
  } catch (err) {
    yield call([console, 'error'], err);
  } finally {
    yield put(setIsReady(true));
  }
}

export function* loginHandler(push: IAuthSumbitPayload['push']): SagaIterator {
  try {
    yield call(push, API_ROUTES.auth.registration);
  } catch (err) {
    yield call([console, 'error'], err);
  }
}
