import { action } from 'typesafe-actions';

import { IReturnedAction } from '../types';

import { ActionTypes as AT } from './actionTypes';

export const notesInitAction = (): IReturnedAction => action(AT.INIT);

export const actionCheckAuth = (): IReturnedAction => action(AT.ACTION_CHECK_AUTH);
