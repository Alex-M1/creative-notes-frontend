import { WS_EVENTS } from '@constants/wsEvents';
import { getPendingPosts } from '@store/posts/selectors';
import { IPublicPost } from '@store/posts/types';
import { emitAction } from '@store/user/actions';
import { getInitStatus, getUserRole } from '@store/user/selectors';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import withContent from '@hoc/withContent';
import { useTheme } from '@hoc/withTheme';

import PendingPost from '../PendingPost';
import { PendingPageWrapper, PendingPostsWrapper, NoContentLabel } from './styled';
import Jaw from '../Jaw';

const PendingPage: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const themeProps = useTheme();

  const initStatus = useSelector(getInitStatus);
  const currentUserRole = useSelector(getUserRole);
  const { posts } = useSelector(getPendingPosts);

  const isNeeedToShowPosts = posts.length > 0;

  useEffect(() => {
    if (initStatus) {
      dispatch(emitAction(WS_EVENTS.GET_PENDING_POSTS));
    }
  }, [initStatus]);

  return (
    <PendingPageWrapper>
      <Jaw/>
      {isNeeedToShowPosts ? (
        <PendingPostsWrapper {...themeProps}>
          {posts.map((post: IPublicPost) => (
            <PendingPost
              {...post}
              key={post._id}
              currentUserRole={currentUserRole}
            />
          ))}
        </PendingPostsWrapper>
      ) : (
        <NoContentLabel>
          {t('no_pending_posts')}
        </NoContentLabel>
      )}
    </PendingPageWrapper>
  );
};

export default withContent(PendingPage);
