import { TReducer } from '@store/types';
import { ActionTypes as AT } from './actionTypes';
import { IUserState } from './types';
import * as actions from './actions';

export const initialState: IUserState = {
  isReady: true,
  currentLanguage: 'en',
};

export const userReducer: TReducer<IUserState, typeof actions> = (state = initialState, action) => {
  switch (action.type) {
    case AT.SET_IS_READY: return { ...state, isReady: action.payload };
    case AT.SET_CURRENT_LANGUAGE: return { ...state, currentLanguage: action.payload };
    default: return state;
  }
};
