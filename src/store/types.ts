import { ActionType, Reducer } from 'typesafe-actions';
import { rootReducer } from './index';

export type ApplicationState = ReturnType<typeof rootReducer>;

export interface IReturnedAction<P = null> {
  type: string,
  payload?: P
}

export type TReducer<S, A> = Reducer<S, ActionType<A>>;
