import React from 'react';
import PrivatePost from './PrivatePost';
import MainPage from '../MainPage';

const PrivatePage: React.FC = () => (
  <MainPage>
    {
      ({ post, currentUserRole }) => (
        <PrivatePost
          {...post}
          key={post._id}
          currentUserRole={currentUserRole}
        />
      )
    }
  </MainPage>
);

export default PrivatePage;
