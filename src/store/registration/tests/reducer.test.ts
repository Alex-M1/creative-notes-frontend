import { reducer, initialState } from '../reducer';
import {
  setRegistrationValue,
  clearRegistrationInputs,
  sendRegistrationRequest,
} from '../actions';

describe('registrationReducer', () => {
  it('SET_VALUE', () => {
    const testValue = 'testValue';
    const testName = 'login';
    expect(reducer(initialState, setRegistrationValue({ name: `${testName}`, value: `${testValue}` })))
      .toEqual({ ...initialState, [testName]: testValue });
  });
  it('SEND_REGISTRATION_REQUEST', () => {
    expect(reducer(initialState, sendRegistrationRequest()))
      .toEqual({ ...initialState, isLoading: true });
  });
  it('CLEAR_INPUTS_VALUES', () => {
    expect(reducer(initialState, clearRegistrationInputs()))
      .toEqual({
        ...initialState,
        login: '',
        password: '',
        confirm: '',
      });
  });
});
