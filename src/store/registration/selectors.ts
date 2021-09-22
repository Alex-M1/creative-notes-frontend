import { createSelector } from 'reselect';
import { ApplicationState } from '../types';
import { TRegistrationState } from './types';

export const registrationStore = (state: ApplicationState): TRegistrationState => state.registration;
export const regValues = createSelector(
  registrationStore,
  ({ login, password, confirm }): TRegistrationState => ({ login, password, confirm }),
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
