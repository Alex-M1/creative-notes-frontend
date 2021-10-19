import { POST_KEY } from '@constants/posts';
import { WS_EVENTS } from '@constants/wsEvents';

export const chooseWSEvent = (name: POST_KEY): WS_EVENTS => {
  if (name === POST_KEY.PENDING) return WS_EVENTS.GET_PENDING_POSTS;
  if (name === POST_KEY.PUBLIC) return WS_EVENTS.GET_PUBLIC_POSTS;
  if (name === POST_KEY.PRIVATE) return WS_EVENTS.GET_PRIVATE_POSTS;
};
