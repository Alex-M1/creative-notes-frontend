import { IAuthFormValues, IInputKey, TAuthInput, TAuthPages } from '@common/types/authTypes';
import { AuthInputType } from '@constants/auth';

export const typeOfInput = (type: TAuthInput): string => {
  switch (type) {
    case 'confirm':
    case 'password':
      return 'password';
    default: return 'text';
  }
};

export const setAuthPageProps = (page: TAuthPages): IAuthFormValues => {
  if (page === 'registration') {
    return {
      title: 'sign_up',
      inputKey: AuthInputType,
    };
  }
  if (page === 'authorization') {
    return {
      title: 'sign_in',
      inputKey: <IInputKey>Object.values(AuthInputType).reduce((acc, current) => (
        current === 'confirm' ? { ...acc } : { ...acc, [current]: current }
      ), {}),
    };
  }
};
