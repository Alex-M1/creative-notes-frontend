import { createSelector } from 'reselect';
import { TAuthInput } from '@src/components/__common__/types/authTypes';
import { ApplicationState } from '../types';
import { IAuthState } from './types';

export const authStore = (state: ApplicationState): IAuthState => state.auth;
export const regValues = createSelector(
  authStore,
  ({ login, password, confirm }): IAuthState => ({ login, password, confirm }),
);

export const getAuthValue = createSelector(
  authStore,
  (_state, type: TAuthInput) => type,
  (auth, type) => auth[type],
);
