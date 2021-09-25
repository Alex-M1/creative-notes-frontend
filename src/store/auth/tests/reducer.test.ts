import { authReducer, initialState } from '../reducer';
import * as actions from '../actions';
import { IAuthState } from '../types';

describe('authReducer', () => {
  let state: IAuthState;
  beforeEach(() => {
    state = initialState;
  });
  it('SET_VALUE', () => {
    const testValue = 'testValue';
    const testName = 'login';
    expect(authReducer(state, actions.setRegistrationValue({ name: `${testName}`, value: `${testValue}` })))
      .toEqual({ ...state, [testName]: testValue });
  });
  it('CLEAR_INPUTS_VALUES', () => {
    expect(authReducer(state, actions.clearRegistrationInputs()))
      .toEqual({
        ...state,
        login: '',
        password: '',
        confirm: '',
      });
  });
});
