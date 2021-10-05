import { ThemesKey } from '@constants/posts';

export interface IPublicPosts {
  posts: IPublicPost[];
  total_page: number;
  page: number;
}

export interface IPostsState {
  publicPosts: IPublicPosts;
  createPost: ICreatePost
}

export interface IPublicPost {
  _id: string;
  _v: number;
  author: IPostAuthor;
  content: string;
  created_at: number;
  theme: string;
  likes: string[];
}

export interface IPostAuthor {
  _id: string;
  login: string;
}

export interface ICreatePost {
  theme: TThemes;
  value: string
}

export type TThemes = ThemesKey.art | ThemesKey.music | ThemesKey.tehnology | ThemesKey.think | ThemesKey.work;
