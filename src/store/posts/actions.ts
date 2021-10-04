import { IReturnedAction } from '@store/types';
import { action } from 'typesafe-actions';
import { ActionTypes as AT } from './actionTypes';
import { IPublicPosts } from './types';

export const setPublicPosts = (
  payload: IPublicPosts,
): IReturnedAction<IPublicPosts> => action(AT.SET_PUBLIC_POSTS, payload);
