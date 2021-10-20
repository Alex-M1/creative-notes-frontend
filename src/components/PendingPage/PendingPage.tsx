import React from 'react';
import withContent from '@hoc/withContent';
import MainPage from '../MainPage';
import PostContainer from '../__common__/PostContainer';

const PendingPage: React.FC = () => (
  <MainPage>
    {
      ({ post, currentUserRole }) => <PostContainer {...post} key={post._id} currentUserRole={currentUserRole} />
    }
  </MainPage>
);

export default withContent(PendingPage);
