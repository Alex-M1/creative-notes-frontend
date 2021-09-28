import { createSelector } from 'reselect';
import { ApplicationState } from '../types';
import { IUserState } from './types';

export const userStore = (state: ApplicationState): IUserState => state.user;
export const getIsReady = createSelector(
  userStore,
  ({ isReady }): boolean => isReady,
);

export const getCurrentLanguage = createSelector(
  userStore,
  ({ currentLanguage }): string => currentLanguage,
);
