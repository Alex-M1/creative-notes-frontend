import React from 'react';
import withContent from '@hoc/withContent';
import PendingPost from './PendingPost';
import MainPage from '../MainPage';

const PendingPage: React.FC = () => (
  <MainPage>
    {
      ({ post, currentUserRole }) => (
        <PendingPost
          {...post}
          key={post._id}
          currentUserRole={currentUserRole}
        />
      )
    }
  </MainPage>
);

export default withContent(PendingPage);
