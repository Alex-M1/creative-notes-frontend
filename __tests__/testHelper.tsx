import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount, ShallowWrapper, ReactWrapper } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Store } from 'redux';

export const shallowSmart = (component: React.FC, store: Store): ShallowWrapper => {
  const core = store
    ? <Provider store={store}>{component}</Provider>
    : component;
  const test = <Router>{core}</Router>;
  return shallow(test);
};

export const mountSmart = (component: React.FC, store: Store): ReactWrapper => {
  const core = store
    ? <Provider store={store}>{component}</Provider>
    : component;
  const test = <Router>{core}</Router>;
  return mount(test);
};

export const testHelper = (funcs: Array<any>): void => {
  describe('to be defined', () => {
    it.each([
      ...funcs.map(func => [func]),
    ])('%# case', (func) => {
      expect(typeof func).toBeDefined();
    });
  });
  describe('to be function', () => {
    it.each([
      ...funcs.map(func => [func]),
    ])('%# case', (func) => {
      expect(typeof func).toBe('function');
    });
  });
};
