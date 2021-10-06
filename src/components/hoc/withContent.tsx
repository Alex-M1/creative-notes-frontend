import React, { useEffect } from 'react';
import { contentInitAction } from '@store/user/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getInitStatus } from '@store/user/selectors';

const withContent = (Component: React.ComponentType<any>) => (): any => {
  const dispatch = useDispatch();
  const initStatus = useSelector(getInitStatus);

  useEffect(() => {
    if (!initStatus) dispatch(contentInitAction());
  }, [initStatus]);

  return (<Component/>);
};

export default withContent;
