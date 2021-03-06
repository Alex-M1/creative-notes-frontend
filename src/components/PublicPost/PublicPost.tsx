import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ROLES } from '@constants/roles';
import { ReactSVG } from 'react-svg';
import moment from 'moment';
import { deletePost, likePost } from '@store/user/actions';
import { useDispatch } from 'react-redux';
import { useTheme } from '@hoc/withTheme';
import { IPublicPostProps } from './types';

import {
  PublicPostLike,
  PublicPostDate,
  PublicPostLikes,
  PublicPostTheme,
  PublicPostHeader,
  PublicPostWrapper,
  PublicPostAuthor,
  PublicPostFooter,
  PublicPostContent,
  PublicPostDateText,
  PublicPostThemeName,
  PublicPostThemeText,
  PublicPostAuthorName,
  PublicPostAuthorText,
  PublicPostAuthorImg,
  PublicPostDeleteBtn,
  PublicPostLikesCount,
  PublicPostContentText,
} from './styled';

const PublicPost: FC<IPublicPostProps> = (
  {
    theme: postTheme,
    likes,
    author,
    content,
    img,
    created_at,
    currentUserRole,
  }) => {
  const themeProps = useTheme();
  const { t } = useTranslation();
  const prettyDate = moment(created_at).format('DD MM YYYY hh:mm:ss');
  const dispatch = useDispatch();

  const handleDeletePost = () => dispatch(deletePost());
  const handleLikePost = () => dispatch(likePost());
  
  return (

    <PublicPostWrapper {...themeProps}>
      <PublicPostHeader {...themeProps}>
        <PublicPostTheme>
          <PublicPostThemeName
            {...themeProps}
          >
            {t('theme')}
          </PublicPostThemeName>
          <PublicPostThemeText
            {...themeProps}
          >
            {postTheme}
          </PublicPostThemeText>
        </PublicPostTheme>
        <PublicPostAuthor>
          <PublicPostAuthorName {...themeProps}>{t('author')}</PublicPostAuthorName>
          <PublicPostAuthorImg src={img || 'assets/img/defaultAvatar.png'} />
          <PublicPostAuthorText {...themeProps}>{author.login}</PublicPostAuthorText>
          {currentUserRole !== ROLES.USER && (<PublicPostDeleteBtn onClick={handleDeletePost}><ReactSVG src="assets/img/deleteBtn.svg"/></PublicPostDeleteBtn>)}
        </PublicPostAuthor>
      </PublicPostHeader>
      <PublicPostContent>
        <PublicPostContentText>
          {content}
        </PublicPostContentText>
      </PublicPostContent>
      <PublicPostFooter>
        <PublicPostDate>
          <PublicPostDateText
            {...themeProps}
          >
            {prettyDate}
          </PublicPostDateText>
        </PublicPostDate>
        <PublicPostLikes>
          <PublicPostLike onClick={handleLikePost}>
            <ReactSVG src="assets/img/like.svg" />
          </PublicPostLike>
          <PublicPostLikesCount
            {...themeProps}
          >
            {likes.length}
          </PublicPostLikesCount>
        </PublicPostLikes>
      </PublicPostFooter>
    </PublicPostWrapper>
  );
};

export default PublicPost;
