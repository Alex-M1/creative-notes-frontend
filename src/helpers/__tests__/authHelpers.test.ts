import { AuthInputType, AuthPages } from '@constants/auth';
import { setAuthPageProps, typeOfInput } from '../authHelpers';

describe('authHelpers', () => {
  describe('setAuthPageProps', () => {
    it.each([
      [
        AuthPages.auth,
        {
          title: 'sign_in',
          inputKey: {
            login: 'login',
            password: 'password',
          },
        },
      ],
      [
        AuthPages.registration, {
          title: 'sign_up',
          inputKey: AuthInputType,
        },
      ],
    ])('%s', (page, expected) => {
      expect(setAuthPageProps(page)).toEqual(expected);
    });
  });
  describe('typeOfInput', () => {
    it.each([
      [AuthInputType.login, 'text'],
      [AuthInputType.password, 'password'],
      [AuthInputType.confirm, 'password'],
    ])('%s', (type, expected) => {
      expect(typeOfInput(type)).toBe(expected);
    });
  });
});
