import { WS_EVENTS } from '@constants/wsEvents';
import { getPublicPosts } from '@store/posts/selectors';
import { IPublicPost } from '@store/posts/types';
import { emitAction } from '@store/user/actions';
import { getInitStatus, getUserRole } from '@store/user/selectors';
import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import withContent from '@hoc/withContent';
import { useTheme } from '@hoc/withTheme';

import { POST_KEY } from '@constants/posts';
import PublicPost from '../PublicPost';
import { MainPageWrapper, PublicPostsWrapper, NoContentLabel } from './styled';
import Pagination from '../__common__/Pagination';
import Jaw from '../Jaw';

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const themeProps = useTheme();

  const initStatus = useSelector(getInitStatus);
  const currentUserRole = useSelector(getUserRole);
  const { posts } = useSelector(getPublicPosts);

  const isNeeedToShowPosts = useMemo(() => posts.length > 0, [posts]);

  useEffect(() => {
    if (initStatus) {
      dispatch(emitAction(WS_EVENTS.GET_PUBLIC_POSTS));
    }
  }, [initStatus]);

  return (
    <MainPageWrapper>
      <Jaw />
      {isNeeedToShowPosts ? (
        <PublicPostsWrapper {...themeProps}>
          {posts.map((post: IPublicPost) => (
            <PublicPost
              {...post}
              key={post._id}
              currentUserRole={currentUserRole}
            />
          ))}
          <Pagination postKey={POST_KEY.PUBLIC} />
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
