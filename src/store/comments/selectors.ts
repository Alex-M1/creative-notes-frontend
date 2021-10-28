import { ApplicationState } from '@store/types';
import { createSelector } from 'reselect';
import { IComment, ICommentState } from './types';

export const commentsStore = (state: ApplicationState): ICommentState => state.comments;

export const getCommentValue = createSelector(
  commentsStore,
  ({ createCommentValue }): string => createCommentValue.trim(),
);

export const getComments = createSelector(
  commentsStore,
  ({ comments }): Array<IComment> => comments,
);
