import { IReturnedAction } from '@store/types';
import { action } from 'typesafe-actions';
import { ActionTypes as AT } from './actionTypes';
import { IComment } from './types';

export const changeCommentValue = (payload: string): IReturnedAction<string> => (
  action(AT.CHANGE_COMMENT_VALUE, payload)
);

export const getCommentsRequest = (payload: string): IReturnedAction<string> => (
  action(AT.GET_COMMENTS_REQUEST, payload)
);

export const setComments = (payload: Array<IComment>): IReturnedAction<Array<IComment>> => (
  action(AT.SET_COMMENTS, payload)
);
