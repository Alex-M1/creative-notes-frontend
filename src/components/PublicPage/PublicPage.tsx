import React from 'react';
import PostContainer from '@common/PostContainer';
import MainPage from '../MainPage';

const PublicPage: React.FC = () => (
  <MainPage>
    {({ post, currentUserRole }) => <PostContainer {...post} key={post._id} currentUserRole={currentUserRole} />}
  </MainPage>
);

export default PublicPage;
