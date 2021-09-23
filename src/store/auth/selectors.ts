import { createSelector } from 'reselect';
import { ApplicationState } from '../types';
import { IAuthState } from './types';

export const authStore = (state: ApplicationState): IAuthState => state.auth;
export const regValues = createSelector(
  authStore,
  ({ login, password, confirm }): IAuthState => ({ login, password, confirm }),
);

export const regLogin = createSelector(
  regValues,
  ({ login }): string => login,
);

export const regPassword = createSelector(
  regValues,
  ({ password }): string => password,
);

export const regConfirm = createSelector(
  regValues,
  ({ confirm }): string => confirm,
);
