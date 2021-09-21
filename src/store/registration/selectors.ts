import { createSelector } from 'reselect';
import { ApplicationState } from '../types';
import { TInitialState, IRegValue } from './types';

export const registrationStore = (state: ApplicationState): TInitialState => state.registration;
export const regValues = createSelector(
  registrationStore,
  ({ login, password, confirm }: TInitialState): IRegValue => ({ login, password, confirm }),
);
