export interface ICommentState {
  comments: Array<IComment>;
  createCommentValue: string;
}

export interface IComment {
  _id: string,
  post: string,
  author: string,
  content: string;
  created_at: number;
}
