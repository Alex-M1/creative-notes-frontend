import { IPostAuthor } from '@store/posts/types';

export interface ICommentState {
  comments: Array<IComment>;
  createCommentValue: string;
}

export interface IComment {
  _id: string,
  post: string,
  author: IPostAuthor,
  content: string;
  created_at: number;
}

export interface IGetCommentsRequest {
  isJoinRoom?: boolean;
  postId: string;
}
