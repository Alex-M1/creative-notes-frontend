import { APP_ROUTES } from '@constants/appRoutes';
import { POST_KEY } from '@constants/posts';
import { WS_EVENTS } from '@constants/wsEvents';

export const chooseWSEvent = (name: POST_KEY): WS_EVENTS => {
  if (name === POST_KEY.PENDING) return WS_EVENTS.GET_PENDING_POSTS;
  if (name === POST_KEY.PUBLIC) return WS_EVENTS.GET_PUBLIC_POSTS;
  if (name === POST_KEY.PRIVATE) return WS_EVENTS.GET_PRIVATE_POSTS;
};

export const chooseKeyByRoute = (route: APP_ROUTES): POST_KEY => {
  if (route === APP_ROUTES.MAIN) return POST_KEY.PUBLIC;
  if (route === APP_ROUTES.PRIVATE) return POST_KEY.PRIVATE;
  if (route === APP_ROUTES.PENDING) return POST_KEY.PENDING;
};

export const chooseWSEventByRoute = (route: APP_ROUTES): WS_EVENTS => {
  if (route === APP_ROUTES.PENDING) return WS_EVENTS.GET_PENDING_POSTS;
  if (route === APP_ROUTES.MAIN) return WS_EVENTS.GET_PUBLIC_POSTS;
  if (route === APP_ROUTES.PRIVATE) return WS_EVENTS.GET_PRIVATE_POSTS;
};
