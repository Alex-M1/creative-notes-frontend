import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ROLES } from '@constants/roles';
import { ReactSVG } from 'react-svg';
import moment from 'moment';
import { deletePost } from '@store/user/actions';
import { useDispatch } from 'react-redux';
import { useTheme } from '@hoc/withTheme';
import { IPublicPostProps } from './types';

import {
  PublicPostDate,
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
  PublicPostContentText,
} from './styled';

const PublicPost: FC<IPublicPostProps> = (
  {
    theme: postTheme,
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
            {t(postTheme)}
          </PublicPostThemeText>
        </PublicPostTheme>
        <PublicPostAuthor>
          <PublicPostAuthorName {...themeProps}>{t('author')}</PublicPostAuthorName>
          <PublicPostAuthorImg src={img || 'assets/img/defaultAvatar.png'} />
          <PublicPostAuthorText {...themeProps}>{author.login}</PublicPostAuthorText>
          {currentUserRole === ROLES.SUPER_ADMIN && (<PublicPostDeleteBtn onClick={handleDeletePost}><ReactSVG src="assets/img/deleteBtn.svg"/></PublicPostDeleteBtn>)}
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
      </PublicPostFooter>
    </PublicPostWrapper>
  );
};

export default PublicPost;
