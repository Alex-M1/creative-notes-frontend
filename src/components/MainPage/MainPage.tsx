import { IPost } from '@store/posts/types';
import { Location } from 'history';
import { emitAction } from '@store/posts/actions';
import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useTheme } from '@hoc/withTheme';
import { chooseKeyByRoute, chooseWSEvent } from '@src/helpers/postsHelper';
import { APP_ROUTES } from '@constants/appRoutes';
import { MainPageWrapper, PostsWrapper, NoContentLabel } from './styled';
import Pagination from '../__common__/Pagination';
import Jaw from '../Jaw';

interface IProps {
  initStatus: boolean;
  currentUserRole: string;
  posts: Array<IPost>
  children: (props: IChildrenProps) => JSX.Element
  location: Location
}
interface IChildrenProps {
  currentUserRole: string
  post: IPost
}
const MainPage: React.FC<IProps> = ({
  posts,
  location,
  children,
  initStatus,
  currentUserRole,
}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const themeProps = useTheme();
  const isNeeedToShowPosts = useMemo(() => posts.length > 0, [posts]);
  const postKey = chooseKeyByRoute(location.pathname as APP_ROUTES);
  const socketEvent = chooseWSEvent(postKey);
  
  useEffect(() => {
    if (initStatus) {
      dispatch(emitAction(socketEvent));
    }
  }, [initStatus]);

  return (
    <MainPageWrapper>
      <Jaw />
      {isNeeedToShowPosts ? (
        <PostsWrapper {...themeProps}>
          {posts.map((post: IPost) => children({ post, currentUserRole }))}
          <Pagination postKey={postKey} />
        </PostsWrapper>
      ) : (
        <NoContentLabel>
          {t('no_public_posts')}
        </NoContentLabel>
      )}
    </MainPageWrapper>
  );
};

export default MainPage;
