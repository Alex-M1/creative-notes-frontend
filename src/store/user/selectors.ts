import { createSelector } from 'reselect';
import { ApplicationState } from '../types';
import { IUserState, IUserInfo } from './types';

export const userStore = (state: ApplicationState): IUserState => state.user;
export const getIsReady = createSelector(
  userStore,
  ({ isReady }: IUserState): boolean => isReady,
);

export const getCurrentLanguage = createSelector(
  userStore,
  ({ currentLanguage }: IUserState): string => currentLanguage,
);

export const getInitStatus = createSelector(
  userStore,
  ({ initStatus }: IUserState): boolean => initStatus,
);

export const getUserInfo = createSelector(
  userStore,
  ({ userInfo }: IUserState): IUserInfo => userInfo,
);

export const getUserRole = createSelector(
  getUserInfo,
  ({ role }: IUserInfo): string => role,
);
