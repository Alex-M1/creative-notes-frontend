import { IReturnedAction } from '@store/types';
import { action } from 'typesafe-actions';
import { ActionTypes as AT } from './actionTypes';
import { IComment, IGetCommentsRequest } from './types';

export const changeCommentValue = (payload: string): IReturnedAction<string> => (
  action(AT.CHANGE_COMMENT_VALUE, payload)
);

export const getCommentsRequest = (payload: IGetCommentsRequest): IReturnedAction<IGetCommentsRequest> => (
  action(AT.GET_COMMENTS_REQUEST, payload)
);

export const setComments = (payload: Array<IComment>): IReturnedAction<Array<IComment>> => (
  action(AT.SET_COMMENTS, payload)
);

export const createCommentRequest = (payload: string): IReturnedAction<string> => (
  action(AT.CREATE_COMMENT_REQUEST, payload)
);

export const leaveRoomRequest = (paylaod: string): IReturnedAction<string> => (
  action(AT.LEAVE_ROOM, paylaod)
);
