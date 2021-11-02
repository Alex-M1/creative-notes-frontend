import React, { useEffect } from 'react';
import { contentInitAction, setInitStatus, takeFreshUserInfo } from '@store/user/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getInitStatus } from '@store/user/selectors';
import SocketMaster from '@src/helpers/SocketMaster';

const withContent = (Component: React.ComponentType<any>) => (props: any): any => {
  const dispatch = useDispatch();
  const initStatus = useSelector(getInitStatus);

  useEffect(() => {
    if (!initStatus) {
      SocketMaster.connect();
      dispatch(contentInitAction());
      dispatch(takeFreshUserInfo());
      dispatch(setInitStatus(true));
    }
  }, []);

  return (<Component {...props} />);
};

export default withContent;
