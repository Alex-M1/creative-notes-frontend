import { IReturnedAction } from '@store/types';
import { action } from 'typesafe-actions';
import { ActionTypes as AT } from './actionTypes';
import * as T from './types';

export const setPublicPosts = (
  payload: T.IPublicPosts,
): IReturnedAction<T.IPublicPosts> => action(AT.SET_PUBLIC_POSTS, payload);

export const setPostTheme = (
  payload: T.TThemes,
): IReturnedAction<T.TThemes> => action(AT.SET_POST_THEME, payload);
