import { createSelector } from 'reselect';
import { ApplicationState } from '../types';
import { IPostsState, IPublicPosts } from './types';

export const postsStore = (state: ApplicationState): IPostsState => state.posts;
export const getPublicPosts = createSelector(
  postsStore,
  ({ publicPosts }: IPostsState): IPublicPosts => publicPosts,
);

export const getTotalPage = createSelector(
  getPublicPosts,
  ({ total_page }) => total_page,
);

export const getPage = createSelector(
  getPublicPosts,
  ({ page }) => page,
);
export const getCreatePosts = createSelector(
  postsStore,
  ({ createPost }) => createPost,
);

export const getPostTheme = createSelector(
  getCreatePosts,
  ({ theme }) => theme,
);

export const getCreatePostValue = createSelector(
  getCreatePosts,
  ({ value }) => value,
);

export const getIsSendPost = createSelector(
  getCreatePosts,
  ({ isSendPost }) => isSendPost,
);
