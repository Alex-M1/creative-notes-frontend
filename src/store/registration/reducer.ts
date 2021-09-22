import { TReducer } from 'store/types';
import { ActionTypes as AT } from './actionTypes';
import { TRegistrationState } from './types';
import * as actions from './actions';

export const initialState: TRegistrationState = {
  login: '',
  password: '',
  confirm: '',
};

export const registrationReducer: TReducer<TRegistrationState, typeof actions> = (state = initialState, action) => {
  switch (action.type) {
  case AT.SET_VALUE: return { ...state, [action.payload.name]: action.payload.value };
  case AT.CLEAR_INPUTS_VALUES:
    return {
      ...state,
      login: '',
      password: '',
      confirm: '',
    };
  default: return state;
  }
};
