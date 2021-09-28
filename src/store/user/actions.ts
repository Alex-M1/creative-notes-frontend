import { IReturnedAction } from '@store/types';
import { action } from 'typesafe-actions';
import { ActionTypes as AT } from './actionTypes';

export const userCheck = (): IReturnedAction => action(AT.USER_CHECK);
export const setIsReady = (payload: boolean): IReturnedAction<boolean> => action(AT.SET_IS_READY, payload);
export const setCurrentLanguage = (
  payload: string,
): IReturnedAction<string> => action(AT.SET_CURRENT_LANGUAGE, payload);
