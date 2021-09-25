import { TAuthInput } from 'src/components/__common__/types/commonTypes';
import { ApplicationState } from 'store/types';
import { mockStore } from 'tests/mockStore';
import { testHelper } from 'tests/testHelper';
import * as selectors from '../selectors';

describe('registration selectors', () => {
  let state: ApplicationState;
  beforeEach(() => {
    state = mockStore;
  });

  testHelper([selectors.authStore, selectors.regValues, selectors.getAuthValue]);
  it('registrationStore', () => {
    expect(selectors.authStore(state)).toEqual(state.auth);
  });
  it('regValues', () => {
    expect(selectors.regValues(state)).toEqual(state.auth);
  });
  it.each([
    ['login' as TAuthInput],
    ['password' as TAuthInput],
    ['confirm' as TAuthInput],
  ])('getAuthvalue %s', (value) => {
    expect(selectors.getAuthValue(state, value)).toBe(state.auth[value]);
  });
});
