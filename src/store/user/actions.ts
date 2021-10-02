import { IReturnedAction } from '@store/types';
import { action } from 'typesafe-actions';
import { ActionTypes as AT } from './actionTypes';
import { ICheckAuth, IUserInfoPayload, IUserInfo } from './types';

export const setUserInfo = (
  payload: IUserInfoPayload,
): IReturnedAction<IUserInfo> => action(AT.SET_USER_INFO, payload.message);
export const setIsReady = (payload: boolean): IReturnedAction<boolean> => action(AT.SET_IS_READY, payload);
export const setCurrentLanguage = (
  payload: string,
): IReturnedAction<string> => action(AT.SET_CURRENT_LANGUAGE, payload);
export const setInitStatus = (payload: boolean): IReturnedAction<boolean> => action(AT.SET_INIT_STATUS, payload);

export const userCheck = (): IReturnedAction => action(AT.USER_CHECK);
export const contentInitAction = (): IReturnedAction => action(AT.CONTENT_INIT);
export const checkAuth = (payload: ICheckAuth): IReturnedAction<ICheckAuth> => action(AT.CHECK_AUTH, payload);
export const disconnect = (): IReturnedAction => action(AT.DISCONNECT);
