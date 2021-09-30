import { expectSaga, testSaga } from 'redux-saga-test-plan';
import * as sagas from '../sagas';
import { ActionTypes as AT } from '../actionTypes';

describe('registrationSaga', () => {
  describe('watchers', () => {
    it('should run all watchers', () => {
      testSaga(sagas.watcherRegistration)
        .next()
        .takeEvery(AT.SEND_REGISTRATION_REQUEST, sagas.workerRegistration)
        .next()
        .isDone();
    });
  });
  describe('fork', () => {
    it('should fork watchers', () => {
      expectSaga(sagas.watcherRegistration)
        .put({ type: 'FORKED' })
        .run();
    });
  });
});
