import { IAuthFormValues, IInputKey, TAuthInput, TAuthPages } from '@common/types/authTypes';
import { AuthInputType, AuthPages, AUTH_REGULAR, COOKIE_SETTING } from '@constants/auth';
import { IAuthState } from '@store/auth/types';
import { IValidation } from '@helpers/types';
import { ILoginPassword } from '../store/auth/types';

export const typeOfInput = (type: TAuthInput): string => {
  switch (type) {
    case AuthInputType.confirm:
    case AuthInputType.password:
      return 'password';
    default: return 'text';
  }
};

export const setAuthPageProps = (page: TAuthPages): IAuthFormValues => {
  if (page === AuthPages.registration) {
    return {
      page,
      title: 'sign_up',
      inputKey: AuthInputType,
    };
  }
  if (page === AuthPages.auth) {
    return {
      page,
      title: 'sign_in',
      inputKey: <IInputKey>Object.values(AuthInputType).reduce((acc, current) => (
        current === AuthInputType.confirm ? { ...acc } : { ...acc, [current]: current }
      ), {}),
    };
  }
};

//TODO research how to validate without copying.

export const registrationValidation = ({ login, password, confirm }: IAuthState): IValidation => {
  const { loginReg, passwordReg } = AUTH_REGULAR;
  if (!loginReg.test(login.trim())) return { errorMessage: 'login_validation', isValid: false };
  if (!passwordReg.test(password.trim())) return { errorMessage: 'password_validation', isValid: false };
  if (password.trim() !== confirm.trim()) return { errorMessage: 'confirm_validation', isValid: false };
  return { errorMessage: '', isValid: true };
};

export const loginValidation = ({ login, password }: ILoginPassword): IValidation => {
  const { loginReg, passwordReg } = AUTH_REGULAR;
  if (!loginReg.test(login.trim())) return { errorMessage: 'login_validation', isValid: false };
  if (!passwordReg.test(password.trim())) return { errorMessage: 'password_validation', isValid: false };
  return { errorMessage: '', isValid: true };
};

export const cookieMaster = {
  setTokenInCookie: (payload: string, age: number = COOKIE_SETTING.AGE): void => {
    document.cookie = `${COOKIE_SETTING.TOKEN_NAME}=${payload}; path=/; max-age=${age};`;
  },
  getTokenFromCookie: (): string => {
    const value = `; ${document.cookie};`;
    const parts = value.split(`; ${COOKIE_SETTING.TOKEN_NAME}=`);
    if (parts.length === COOKIE_SETTING.SPLIT_LEN) {
      return parts.pop().split(';').shift();
    }
  },

  deleteTokenFromCookie: (): void => {
    cookieMaster.setTokenInCookie(COOKIE_SETTING.TOKEN_NAME, -1);
  },
};
