import { IReturnedAction } from '@store/types';
import { action } from 'typesafe-actions';
import { ActionTypes as AT } from './actionTypes';
import { IAuthInputPld, IAuthSumbitPayload } from './types';

export const setRegistrationValue = (
  payload: IAuthInputPld,
): IReturnedAction<IAuthInputPld> => action(AT.SET_VALUE, payload);

export const authSubmit = (
  payload: IAuthSumbitPayload,
): IReturnedAction<IAuthSumbitPayload> => action(AT.AUTH_SUBMIT, payload);

export const clearAuthInputsValues = (): IReturnedAction => action(AT.CLEAR_AUTH_INPUTS_VALUES);
