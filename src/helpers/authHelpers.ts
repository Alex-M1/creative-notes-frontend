import { TAuthInput } from 'common/types/commonTypes';

export const typeOfInput = (type: TAuthInput): string => {
  switch (type) {
  case 'login':
    return 'text';
  case 'confirm':
  case 'password':
    return 'password';
  default: return type;
  }
};
