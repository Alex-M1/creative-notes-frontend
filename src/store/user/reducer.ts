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
  oldPassword: '',
  newPassword: '',
  freezeUserInfo: {},
  initStatus: false,
  adminPanel: {},
  imgName: '',
};

export const userReducer: TReducer<IUserState, typeof actions> = (state = initialState, action) => {
  switch (action.type) {
    case AT.SET_IS_READY: return { ...state, isReady: action.payload };
    case AT.SET_CURRENT_LANGUAGE: return { ...state, currentLanguage: action.payload };
    case AT.SET_USER_INFO: return { ...state, userInfo: action.payload };
    case AT.SET_INIT_STATUS: return { ...state, initStatus: action.payload };
    case AT.SET_OLD_PASSWORD: return { ...state, oldPassword: action.payload };
    case AT.SET_NEW_PASSWORD: return { ...state, newPassword: action.payload };
    case AT.CLEAN_PASSWORD_FIELDS: return { ...state, oldPassword: '', newPassword: '' };
    case AT.FREEZE_USER_INFO: return { ...state, freezeUserInfo: state.userInfo };
    case AT.UNFREEZE_USER_INFO: return { ...state, userInfo: state.freezeUserInfo, freezeUserInfo: {} };
    case AT.CHANGE_USER_INFO: return {
      ...state, userInfo: { ...state.userInfo, [action.payload.field]: action.payload.value },
    };
    case AT.SET_IMG: {
      return {
        ...state,
        imgName: action.payload.setImg,
        userInfo: {
          ...state.userInfo,
          img: action.payload.code ? action.payload.code : state.userInfo.img,
        },
      };
    }
    case AT.SET_USERS:
      return {
        ...state,
        adminPanel: action.payload,
      };
    default: return state;
  }
};
