import { setPostIsAnonim } from '@store/posts/actions';

export interface IChangeAnonymous {
  isAnonymous: boolean;
  setPostIsAnonim: typeof setPostIsAnonim
}
