import { AuthPages, AuthInputType } from '@constants/auth';

export type TAuthInput = AuthInputType.login | AuthInputType.password | AuthInputType.confirm;
export type TAuthPages = AuthPages.auth | AuthPages.registration;

export interface IAuthFormValues {
  title: 'sign_in' | 'sign_up';
  inputKey: IInputKey
}
export interface IInputKey {
  login: 'login',
  password: 'password',
  confirm?: 'confirm'
}
