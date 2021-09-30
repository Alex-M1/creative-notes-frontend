import { TReducer } from '@store/types';
import { ActionTypes as AT } from './actionTypes';
import { IAuthState } from './types';
import * as actions from './actions';

export const initialState: IAuthState = {
  login: '',
  password: '',
  confirm: '',
};

export const authReducer: TReducer<IAuthState, typeof actions> = (state = initialState, action) => {
  switch (action.type) {
    case AT.SET_VALUE: return { ...state, [action.payload.name]: action.payload.value };
    case AT.CLEAR_AUTH_INPUTS_VALUES:
      return {
        ...state,
        login: '',
        password: '',
        confirm: '',
      };
    default: return state;
  }
};
