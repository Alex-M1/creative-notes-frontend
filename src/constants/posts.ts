import { ISelect } from '@src/components/__common__/types/commonTypes';

export enum ThemesKey {
  music = 'music',
  art = 'art',
  work = 'work',
  think = 'think',
  tehnology = 'tehnology',
  all = 'all'
}

export const CREATE_THEME_OPTIONS: Array<ISelect> = [
  { label: ThemesKey.music, value: ThemesKey.music },
  { label: ThemesKey.art, value: ThemesKey.art },
  { label: ThemesKey.work, value: ThemesKey.work },
  { label: ThemesKey.think, value: ThemesKey.think },
  { label: ThemesKey.tehnology, value: ThemesKey.tehnology },
];

export const FILTER_THEME_OPTIONS: Array<ISelect> = [
  { label: ThemesKey.all, value: ThemesKey.all },
  ...CREATE_THEME_OPTIONS,
];

export enum PostStatus {
  PENDING = 'pending',
  PRIVATE = 'private',
  PUBLIC = 'public'
}

export enum POST_KEY {
  PUBLIC = 'publicPosts',
  PENDING = 'pendingPosts',
  PRIVATE = 'privatePosts',
  CREATE = 'createPosts'
}

export const PER_PAGE = 5;
