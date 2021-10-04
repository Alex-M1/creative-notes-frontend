import { TReducer } from '@store/types';
import { ThemesKey } from '@constants/posts';
import { ActionTypes as AT } from './actionTypes';
import { IPostsState } from './types';
import * as actions from './actions';

export const initialState: IPostsState = {
  publicPosts: {
    posts: [],
    page: 0,
    total_page: 0,
  },
  createPost: {
    theme: ThemesKey.work,
  },
};

export const postsReducer: TReducer<IPostsState, typeof actions> = (state = initialState, action) => {
  switch (action.type) {
    case AT.SET_PUBLIC_POSTS: return { ...state, publicPosts: action.payload };
    case AT.SET_POST_THEME:
      return {
        ...state,
        createPost: {
          ...state.createPost,
          theme: action.payload,
        },
      };
    default: return state;
  }
};
