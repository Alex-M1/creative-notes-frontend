import { IAuthFormValues, IInputKey, TAuthInput, TAuthPages } from '@common/types/authTypes';
import { AuthInputType, AuthPages } from '@constants/auth';

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
      title: 'sign_up',
      inputKey: AuthInputType,
    };
  }
  if (page === AuthPages.auth) {
    return {
      title: 'sign_in',
      inputKey: <IInputKey>Object.values(AuthInputType).reduce((acc, current) => (
        current === AuthInputType.confirm ? { ...acc } : { ...acc, [current]: current }
      ), {}),
    };
  }
};
