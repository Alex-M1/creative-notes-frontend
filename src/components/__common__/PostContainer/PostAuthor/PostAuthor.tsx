import { ROLES } from '@constants/roles';
import { IPostAuthor } from '@store/posts/types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactSVG } from 'react-svg';
import { IUseTheme } from '@common/types/commonTypes';
import { useLocation } from 'react-router';
import { APP_ROUTES } from '@constants/appRoutes';
import { StPostAuthor, StPostAuthorImg, StPostAuthorName, StPostAuthorText, StPostDeleteBtn } from '../styled';

interface IProps {
  author: IPostAuthor;
  theme: Omit<IUseTheme, 'changeTheme'>;
  userRole: string;
  deletePost: () => void
}

export const PostAuthor: React.FC<IProps> = ({ author, theme, userRole, deletePost }) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  return (
    pathname !== APP_ROUTES.PRIVATE
      ? (
        < StPostAuthor >
          <StPostAuthorName {...theme}>{t('author')}</StPostAuthorName>
          <StPostAuthorImg src={author.img || 'assets/img/defaultAvatar.png'} />
          <StPostAuthorText {...theme}>{author.login}</StPostAuthorText>
          {
            userRole === ROLES.SUPER_ADMIN && pathname === APP_ROUTES.MAIN
              ? <StPostDeleteBtn onClick={deletePost}><ReactSVG src="assets/img/deleteBtn.svg" /></StPostDeleteBtn>
              : null
          }
        </StPostAuthor >
      )
      : null
  );
};
