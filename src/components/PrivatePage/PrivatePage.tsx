import React from 'react';
// import PrivatePost from './PrivatePost';
import MainPage from '../MainPage';
import PostContainer from '../__common__/PostContainer';

const PrivatePage: React.FC = () => (
  <MainPage>
    {
      ({ post, currentUserRole }) => <PostContainer {...post} key={post._id} currentUserRole={currentUserRole} />
    }
  </MainPage>
);

export default PrivatePage;
