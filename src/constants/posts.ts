import { ISelect } from '@src/components/__common__/types/commonTypes';

export enum ThemesKey {
  music = 'music',
  art = 'art',
  work = 'work',
  think = 'think',
  tehnology = 'tehnilogy'
}

export const CREATE_THEME_OPTIONS: Array<ISelect> = [
  { label: ThemesKey.music, value: ThemesKey.music },
  { label: ThemesKey.art, value: ThemesKey.art },
  { label: ThemesKey.work, value: ThemesKey.work },
  { label: ThemesKey.think, value: ThemesKey.think },
  { label: ThemesKey.tehnology, value: ThemesKey.tehnology },
];

export enum PostStatus {
  PENDING = 'pending',
  PRIVATE = 'private',
  PUBLIC = 'public'
}

export const PER_PAGE = 10;
