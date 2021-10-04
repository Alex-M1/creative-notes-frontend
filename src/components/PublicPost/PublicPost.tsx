import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ROLES } from '@constants/roles';
import { ReactSVG } from 'react-svg';
import moment from 'moment';
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
  const prettyDate = moment(created_at).format('MMMM Do YYYY, h:mm:ss a');
  console.log(prettyDate);
  
  return (

    <PublicPostWrapper>
      <PublicPostHeader>
        <PublicPostTheme>
          <PublicPostThemeName>{t('theme')}</PublicPostThemeName>
          <PublicPostThemeText>{theme}</PublicPostThemeText>
        </PublicPostTheme>
        <PublicPostAuthor>
          <PublicPostAuthorName>{t('author')}</PublicPostAuthorName>
          <PublicPostAuthorImg src={img || 'assets/img/defaultAvatar.png'}/>
          {currentUserLogin !== author.login && (<PublicPostAuthorText>{author.login}</PublicPostAuthorText>)}
          {currentUserRole !== ROLES.USER && (<PublicPostDeleteBtn><ReactSVG src="assets/img/deleteBtn.svg"/></PublicPostDeleteBtn>)}
        </PublicPostAuthor>
      </PublicPostHeader>
      <PublicPostContent>{content}</PublicPostContent>
      <PublicPostFooter>
        <PublicPostDate>
          <PublicPostDateText>
            {prettyDate}
          </PublicPostDateText>
        </PublicPostDate>
        <PublicPostLikes>
          <PublicPostLike>
            <ReactSVG src="assets/img/like.svg" />
          </PublicPostLike>
          <PublicPostLikesCount>{likes.length}</PublicPostLikesCount>
        </PublicPostLikes>
      </PublicPostFooter>
    </PublicPostWrapper>
  );
};

export default PublicPost;
