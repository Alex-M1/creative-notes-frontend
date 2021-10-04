import { createSelector } from 'reselect';
import { ApplicationState } from '../types';
import { IPostsState, IPublicPosts } from './types';

export const postsStore = (state: ApplicationState): IPostsState => state.posts;
export const getPublicPosts = createSelector(
  postsStore,
  ({ publicPosts }: IPostsState): IPublicPosts => publicPosts,
);

export const getCreatePosts = createSelector(
  postsStore,
  ({ createPost }) => createPost,
);

export const getPostTheme = createSelector(
  getCreatePosts,
  ({ theme }) => theme,
);
