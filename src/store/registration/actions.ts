import { action } from 'typesafe-actions';
import { actionTypes as AT } from './actionTypes';
import { TRegistartionPayload, TRegistrationAction } from './types';

export const setRegistrationValue = (
  payload: TRegistartionPayload,
): TRegistrationAction => action(AT.SET_VALUE, payload);
export const sendRegistrationRequest = (): TRegistrationAction => action(AT.SEND_REGISTRATION_REQUEST);
export const clearRegistrationInputs = (): TRegistrationAction => action(AT.CLEAR_INPUTS_VALUES);
