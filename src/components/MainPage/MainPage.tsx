import { WS_EVENTS } from '@constants/wsEvents';
import { getPublicPosts } from '@store/posts/selectors';
import { IPublicPost } from '@store/posts/types';
import { emitAction } from '@store/user/actions';
import { getInitStatus, getUserLogin, getUserRole } from '@store/user/selectors';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import withContent from '../hoc/withContent';
import PublicPost from '../PublicPost';

import { MainPageWrapper, PublicPostsWrapper, NoContentLabel } from './styled';

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const initStatus = useSelector(getInitStatus);
  const currentUserRole = useSelector(getUserRole);
  const currentUserLogin = useSelector(getUserLogin);
  const { posts } = useSelector(getPublicPosts);

  const isNeeedToShowPosts = posts.length > 0;
  
  useEffect(() => {
    if (initStatus) {
      dispatch(emitAction(WS_EVENTS.GET_PUBLIC_POSTS));
    }
  }, [initStatus]);

  return (
    <MainPageWrapper>
      {isNeeedToShowPosts ? (
        <PublicPostsWrapper>
          {posts.map((post: IPublicPost) => (
            <PublicPost
              {...post}
              key={post._id}
              currentUserRole={currentUserRole}
              currentUserLogin={currentUserLogin}
            />
          ))}
        </PublicPostsWrapper>
      ) : (
        <NoContentLabel>
          {t('no_public_posts')}
        </NoContentLabel>
      )}
    </MainPageWrapper>
  );
};

export default withContent(MainPage);
