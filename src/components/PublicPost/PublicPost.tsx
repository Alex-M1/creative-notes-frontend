import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ROLES } from '@constants/roles';
import { ReactSVG } from 'react-svg';
import moment from 'moment';
import { deletePost, likePost } from '@store/user/actions';
import { useDispatch } from 'react-redux';
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
    theme,
    likes,
    author,
    content,
    img,
    created_at,
    currentUserLogin,
    currentUserRole,
  }) => {
  const { t } = useTranslation();
  const prettyDate = moment(created_at).format('DD MM YYYY hh:mm:ss');
  const dispatch = useDispatch();

  const handleDeletePost = () => dispatch(deletePost());
  const handleLikePost = () => dispatch(likePost());
  
  return (

    <PublicPostWrapper>
      <PublicPostHeader>
        <PublicPostTheme>
          <PublicPostThemeName>{t('theme')}</PublicPostThemeName>
          <PublicPostThemeText>{theme}</PublicPostThemeText>
        </PublicPostTheme>
        <PublicPostAuthor>
          {currentUserLogin === author.login && (<PublicPostAuthorName>{t('author')}</PublicPostAuthorName>)}
          {currentUserLogin === author.login && (<PublicPostAuthorImg src={img || 'assets/img/defaultAvatar.png'}/>)}
          {currentUserLogin === author.login && (<PublicPostAuthorText>{`${author.login}Maxim12`}</PublicPostAuthorText>)}
          {currentUserRole === ROLES.USER && (<PublicPostDeleteBtn onClick={handleDeletePost}><ReactSVG src="assets/img/deleteBtn.svg"/></PublicPostDeleteBtn>)}
        </PublicPostAuthor>
      </PublicPostHeader>
      <PublicPostContent>
        <PublicPostContentText>
          {content}
        </PublicPostContentText>
      </PublicPostContent>
      <PublicPostFooter>
        <PublicPostDate>
          <PublicPostDateText>
            {prettyDate}
          </PublicPostDateText>
        </PublicPostDate>
        <PublicPostLikes>
          <PublicPostLike onClick={handleLikePost}>
            <ReactSVG src="assets/img/like.svg" />
          </PublicPostLike>
          <PublicPostLikesCount>{likes.length}</PublicPostLikesCount>
        </PublicPostLikes>
      </PublicPostFooter>
    </PublicPostWrapper>
  );
};

export default PublicPost;
