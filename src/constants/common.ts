interface IDefaultPublicPostsBody{
  page: number;
  per_page: number;
  theme: string;
}

export const defaultPublicPostsBody: IDefaultPublicPostsBody = {
  page: 1,
  per_page: 10,
  theme: 'all',
};

export enum MESSAGES{
  SUCCESS = 'success',
}
