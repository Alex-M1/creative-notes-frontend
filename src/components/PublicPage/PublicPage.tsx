import React from 'react';
import PublicPost from './PublicPost';
import MainPage from '../MainPage';

const PublicPage: React.FC = () => (
  <MainPage>
    {
      ({ post, currentUserRole }) => (
        <PublicPost
          {...post}
          key={post._id}
          currentUserRole={currentUserRole}
        />
      )
    }
  </MainPage>
);

export default PublicPage;
