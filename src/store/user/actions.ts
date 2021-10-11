import { IReturnedAction } from '@store/types';
import { action } from 'typesafe-actions';
import { ActionTypes as AT } from './actionTypes';
import { ICheckAuth, IUserInfoPayload, IUserInfo, IErrorPayload, INewUserInfoField } from './types';

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

export const emitAction = (payload: string): IReturnedAction<string> => action(AT.EMIT, payload);
export const setError = (
  payload: IErrorPayload,
): IReturnedAction<string> => action(AT.SET_ERROR, payload.message);

export const deletePost = (): IReturnedAction => action(AT.DELETE_POST);
export const likePost = (): IReturnedAction => action(AT.LIKE_POST);

export const setOldPassword = (payload: string): IReturnedAction<string> => action(AT.SET_OLD_PASSWORD, payload);
export const setNewPassword = (payload: string): IReturnedAction<string> => action(AT.SET_NEW_PASSWORD, payload);
export const changePassword = (): IReturnedAction => action(AT.CHANGE_PASSWORD);
export const cleanPasswordFields = (): IReturnedAction => action(AT.CLEAN_PASSWORD_FIELDS);

export const changeUserInfo = (
  payload: INewUserInfoField,
): IReturnedAction<INewUserInfoField> => action(AT.CHANGE_USER_INFO, payload);

export const takeFreshUserInfo = (): IReturnedAction => action(AT.TAKE_FRESH_USER_INFO);
export const freezeUserInfo = (): IReturnedAction => action(AT.FREEZE_USER_INFO);
export const unFreezeUserInfo = (): IReturnedAction => action(AT.UNFREEZE_USER_INFO);

export const submitChangeUserInfo = (): IReturnedAction => action(AT.SUBMIT_CHANGE_USER_INFO);
