import { PER_PAGE } from './posts';

interface IDefaultPublicPostsBody {
  page: number;
  per_page: number;
  theme: string;
}

export const defaultPublicPostsBody: IDefaultPublicPostsBody = {
  page: 1,
  per_page: PER_PAGE,
  theme: 'all',
};

export enum MESSAGES {
  SUCCESS = 'success',
  ERROR = 'Something has been wrong...'
}
