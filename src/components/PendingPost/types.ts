import { IPublicPost } from '@store/posts/types';

export interface IPendingPostProps extends IPublicPost{
  currentUserRole: string;
}
