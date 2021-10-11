import { IPublicPost } from '@store/posts/types';

export interface IPrivatePostProps extends IPublicPost{
  currentUserRole: string;
}
