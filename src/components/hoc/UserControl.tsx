import React from 'react';
import { userCheck } from '@store/user/actions';
import { useDispatch } from 'react-redux';

const withUserControl = (Component: React.ComponentType<any>) => (): any => {
  useDispatch()(userCheck());

  return (<Component/>);
};

export default withUserControl;
