import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import { actionTypes as AT } from './actionTypes';
import { TInitialState } from './types';
import * as actions from './actions';

type TActions = typeof actions;
export type TActionsRegistration = ActionType<TActions>;

export const initialState: TInitialState = {
  login: '',
  password: '',
  confirm: '',
};

export const registrationReducer: Reducer<TInitialState, TActionsRegistration> = (state = initialState, action) => {
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
