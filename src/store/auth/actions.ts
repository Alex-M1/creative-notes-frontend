import { IReturnedAction } from '@store/types';
import { action } from 'typesafe-actions';
import { ActionTypes as AT } from './actionTypes';
import { IAuthInputPld, IAuthSubmitPayload } from './types';

export const setRegistrationValue = (
  payload: IAuthInputPld,
): IReturnedAction<IAuthInputPld> => action(AT.SET_VALUE, payload);

export const authSubmit = (
  payload: IAuthSubmitPayload,
): IReturnedAction<IAuthSubmitPayload> => action(AT.AUTH_SUBMIT, payload);

export const clearAuthInputsValues = (): IReturnedAction => action(AT.CLEAR_AUTH_INPUTS_VALUES);
