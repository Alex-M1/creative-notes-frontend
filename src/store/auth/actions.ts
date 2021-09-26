import { IReturnedAction } from 'store/types';
import { action } from 'typesafe-actions';
import { ActionTypes as AT } from './actionTypes';
import { IAuthInputPld } from './types';

export const setRegistrationValue = (payload: IAuthInputPld): IReturnedAction<IAuthInputPld> => (
  action(AT.SET_VALUE, payload)
);
export const sendRegistrationRequest = (): IReturnedAction => action(AT.SEND_REGISTRATION_REQUEST);
export const clearRegistrationInputs = (): IReturnedAction => action(AT.CLEAR_INPUTS_VALUES);
