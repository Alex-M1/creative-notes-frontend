import { TReducer } from '@store/types';
import { ICommentState } from './types';
import * as actions from './actions';
import { ActionTypes as AT } from './actionTypes';

export const initialState: ICommentState = {
  comments: [],
  createCommentValue: '',
};

const commentReducer: TReducer<ICommentState, typeof actions> = (state = initialState, action) => {
  switch (action.type) {
    case AT.CHANGE_COMMENT_VALUE:
      return {
        ...state,
        createCommentValue: action.payload,
      };
    case AT.SET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    default: return state;
  }
};

export default commentReducer;
