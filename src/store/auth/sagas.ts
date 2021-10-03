import { push } from 'react-router-redux';
import { postRequest } from '@helpers/requestHelpers';
import { IReturnedAction } from '@store/types';
import { SagaIterator } from '@redux-saga/types';
import { takeEvery, call, select, put } from 'redux-saga/effects';
import { AuthPages } from '@constants/auth';
import { APP_ROUTES } from '@constants/appRoutes';
import { loginPasswordValues, regValues } from '@store/auth/selectors';
import { loginValidation, registrationValidation } from '@helpers/authHelpers';
import { setIsReady } from '@store/user/actions';
import { notifications } from '@helpers/notifications';
import { clearAuthInputsValues } from '@store/auth/actions';
import { REQUEST_URLS } from '@constants/requestsUrls';
import { cookieMaster } from '../../helpers/authHelpers';
import { ActionTypes as AT } from './actionTypes';
// import { IAuthSubmitPayload } from './types';

export function* watcherAuth(): SagaIterator {
  yield takeEvery(AT.AUTH_SUBMIT, submitHandler);
}

export function* submitHandler({ payload }: IReturnedAction<any>): SagaIterator {
  try {
    const { currentPage } = payload;
    switch (currentPage) {
      case AuthPages.auth: yield call(loginHandler);
        break;
      case AuthPages.registration: yield call(registrationHandler);
        break;
      default: return;
    }
  } catch (err) {
    yield call([console, 'error'], err);
  }
}

export function* registrationHandler(): SagaIterator {
  try {
    yield put(setIsReady(false));

    const registrationValues = yield select(regValues);
    const { errorMessage, isValid } = yield call(registrationValidation, registrationValues);

    if (!isValid) return yield call(notifications, { type: 'error', message: errorMessage });

    const registrationBody = yield select(loginPasswordValues);
    const requestAnswer = yield call(postRequest, REQUEST_URLS.registration, registrationBody);

    if (requestAnswer.status === 201) {
      yield call(notifications, { type: 'success', message: `${requestAnswer.message}_registration` });
      yield put(clearAuthInputsValues());
      yield put(push(APP_ROUTES.LOGIN));
    } else {
      yield call(notifications, { type: 'error', message: requestAnswer.message });
    }
  } catch (e) {
    yield call([console, 'error'], e);
  } finally {
    yield put(setIsReady(true));
  }
}

export function* loginHandler(): SagaIterator {
  try {
    yield put(setIsReady(false));

    const loginAndPassword = yield select(loginPasswordValues);
    const { isValid, errorMessage } = yield call(loginValidation, loginAndPassword);

    if (!isValid) return yield call(notifications, { type: 'error', message: errorMessage });

    const requestAnswer = yield call(postRequest, REQUEST_URLS.autorization, loginAndPassword);

    if (requestAnswer.status === 200) {
      yield call([cookieMaster, 'setTokenInCookie'], requestAnswer.token);
      yield call(notifications, { type: 'success', message: 'success_login' });
      yield call([localStorage, 'setItem'], 'role', requestAnswer.role);
      yield put(clearAuthInputsValues());
      yield put(push(APP_ROUTES.MAIN));
    } else {
      yield call(notifications, { type: 'error', message: requestAnswer.message });
    }
  } catch (err) {
    yield call([console, 'error'], err);
  } finally {
    yield put(setIsReady(true));
  }
}
