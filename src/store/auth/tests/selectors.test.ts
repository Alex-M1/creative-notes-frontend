import { testHelper } from 'tests/testHelper';
import * as selectors from '../selectors';

describe('registration selectors', () => {
  let state;
  beforeEach(() => {
    state = {
      auth: {
        login: '',
        password: '',
        confirm: '',
      },
    };
  });

  testHelper([selectors.authStore, selectors.regValues]);
  it('registrationStore', () => {
    expect(selectors.authStore(state)).toEqual(state.auth);
  });
  it('regValues', () => {
    expect(selectors.regValues(state)).toEqual({ login: '', password: '', confirm: '' });
  });
});
