import * as actions from '../actions';
import { ActionTypes as AT } from '../actionTypes';

describe('registration actions', () => {
  describe('actions.setRegistrationValue', () => {
    it('toBe defined', () => {
      expect(actions.setRegistrationValue).toBeDefined();
    });
    it('toBe function', () => {
      expect(typeof actions.setRegistrationValue).toBe('function');
    });
    it('should return value', () => {
      const payload = { name: 'login', value: 'newLogin' };
      expect(actions.setRegistrationValue(payload)).toEqual({ type: AT.SET_VALUE, payload });
    });
  });
  describe('actions.sendRegistrationRequest', () => {
    it('toBe defined', () => {
      expect(actions.sendRegistrationRequest).toBeDefined();
    });
    it('toBe function', () => {
      expect(typeof actions.sendRegistrationRequest).toBe('function');
    });
    it('should return value', () => {
      expect(actions.sendRegistrationRequest())
        .toEqual({ type: AT.SEND_REGISTRATION_REQUEST });
    });
  });
  describe('actions.clearRegistrationInputs', () => {
    it('toBe defined', () => {
      expect(actions.clearRegistrationInputs).toBeDefined();
    });
    it('toBe function', () => {
      expect(typeof actions.clearRegistrationInputs).toBe('function');
    });
    it('should return value', () => {
      expect(actions.clearRegistrationInputs())
        .toEqual({ type: AT.CLEAR_INPUTS_VALUES });
    });
  });
});
