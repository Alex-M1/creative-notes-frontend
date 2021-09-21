import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount, ShallowWrapper, ReactWrapper } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const shallowSmart = (component: React.FC, store: any): ShallowWrapper => {
  const core = store
    ? <Provider store={store}>{component}</Provider>
    : component;
  const test = <Router>{core}</Router>;
  return shallow(test);
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const mountSmart = (component: React.FC, store: any): ReactWrapper => {
  const core = store
    ? <Provider store={store}>{component}</Provider>
    : component;
  const test = <Router>{core}</Router>;
  return mount(test);
};
