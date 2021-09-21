import { combineReducers } from 'redux';
import { all, fork } from '@redux-saga/core/effects';
import { reducer as registrationReducer } from './registration/reducer';
import { watcherRegistration } from './registration/sagas';

const sagas = [
  watcherRegistration,
];

export function* rootSaga(): Generator {
  yield all(sagas.map(fork));
}

export const rootReducer = combineReducers({
  registration: registrationReducer,
});
