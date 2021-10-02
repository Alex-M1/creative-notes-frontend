import { TReducer } from '@store/types';
import { ActionTypes as AT } from './actionTypes';
import { IUserState } from './types';
import * as actions from './actions';

export const initialState: IUserState = {
  isReady: true,
  currentLanguage: 'en',
  userInfo: {
    age: '',
    city: '',
    img: '',
    lastName: '',
    login: '',
    name: '',
    role: '',
  },
  initStatus: false,
};

export const userReducer: TReducer<IUserState, typeof actions> = (state = initialState, action) => {
  switch (action.type) {
    case AT.SET_IS_READY: return { ...state, isReady: action.payload };
    case AT.SET_CURRENT_LANGUAGE: return { ...state, currentLanguage: action.payload };
    case AT.SET_USER_INFO: return { ...state, userInfo: action.payload };
    case AT.SET_INIT_STATUS: return { ...state, initStatus: action.payload };
    default: return state;
  }
};
