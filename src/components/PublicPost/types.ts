import { IPublicPost } from '@store/posts/types';

export interface IPublicPostProps extends IPublicPost{
  currentUserRole: string;
  currentUserLogin: string;
}
