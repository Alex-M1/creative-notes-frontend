import { WS_EVENTS } from '@constants/wsEvents';
import { getPrivatePosts } from '@store/posts/selectors';
import { IPublicPost } from '@store/posts/types';
import { emitAction } from '@store/user/actions';
import { getInitStatus, getUserRole } from '@store/user/selectors';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import withContent from '@hoc/withContent';
import { useTheme } from '@hoc/withTheme';

import { POST_KEY } from '@constants/posts';
import PrivatePost from '../PrivatePost';
import { PrivatePageWrapper, PrivatePostsWrapper, NoContentLabel } from './styled';
import Jaw from '../Jaw';
import Pagination from '../__common__/Pagination';

const PrivatePage: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const themeProps = useTheme();

  const initStatus = useSelector(getInitStatus);
  const currentUserRole = useSelector(getUserRole);
  const { posts } = useSelector(getPrivatePosts);

  const isNeeedToShowPosts = posts.length > 0;

  useEffect(() => {
    if (initStatus) {
      dispatch(emitAction(WS_EVENTS.GET_PRIVATE_POSTS));
    }
  }, [initStatus]);

  return (
    <PrivatePageWrapper>
      <Jaw />
      {isNeeedToShowPosts ? (
        <PrivatePostsWrapper {...themeProps}>
          {posts.map((post: IPublicPost) => (
            <PrivatePost
              {...post}
              key={post._id}
              currentUserRole={currentUserRole}
            />
          ))}
          <Pagination postKey={POST_KEY.PRIVATE} />
        </PrivatePostsWrapper>
      ) : (
        <NoContentLabel>
          {t('no_private_posts')}
        </NoContentLabel>
      )}
    </PrivatePageWrapper>
  );
};

export default withContent(PrivatePage);
