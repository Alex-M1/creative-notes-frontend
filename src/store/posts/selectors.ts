import { APP_ROUTES } from '@constants/appRoutes';
import { POST_KEY } from '@constants/posts';
import { chooseKeyByRoute } from '@src/helpers/postsHelper';
import { createSelector } from 'reselect';
import { ApplicationState } from '../types';
import { IPostsState, IPublicPosts, TThemes } from './types';

export const postsStore = (state: ApplicationState): IPostsState => state.posts;
export const getPublicPosts = createSelector(
  postsStore,
  ({ publicPosts }: IPostsState): IPublicPosts => publicPosts,
);

export const getPosts = createSelector(
  postsStore,
  (_state, route: APP_ROUTES) => route,
  (posts, route) => posts[chooseKeyByRoute(route)].posts,
);

export const getPrivatePosts = createSelector(
  postsStore,
  ({ privatePosts }: IPostsState): IPublicPosts => privatePosts,
);

export const getPendingPosts = createSelector(
  postsStore,
  ({ pendingPosts }: IPostsState): IPublicPosts => pendingPosts,
);

export const getTotalPage = createSelector(
  postsStore,
  (_state: ApplicationState, page: POST_KEY) => page,
  (posts, page): number => posts[page].total_page,
);

export const getPage = createSelector(
  getPublicPosts,
  ({ page }): number => page,
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
  ({ value }): string => value,
);

export const getIsSendPost = createSelector(
  getCreatePosts,
  ({ isSendPost }): boolean => isSendPost,
);

export const getFilteredTheme = createSelector(
  postsStore,
  ({ filteredTheme }): TThemes => filteredTheme,
);
