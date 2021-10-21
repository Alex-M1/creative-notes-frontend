import React from 'react';
import { useLocation } from 'react-router';
import { useTheme } from '@hoc/withTheme';
import { useTranslation } from 'react-i18next';
import { APP_ROUTES } from '@constants/appRoutes';
import { useDispatch } from 'react-redux';
import { push } from 'react-router-redux';
import { StJawWrapper, StJawLink } from './styled';
import CreatePost from './CreatePost';
import PostThemeFilter from './PostThemeFilter';

const Jaw: React.FC = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const themeProps = useTheme();
  const dispatch = useDispatch();

  const redirectToMain = () => dispatch(push(APP_ROUTES.MAIN));
  const redirectToPrivate = () => dispatch(push(APP_ROUTES.PRIVATE));
  const redirectToPending = () => dispatch(push(APP_ROUTES.PENDING));

  return (
    <StJawWrapper {...themeProps}>
      <PostThemeFilter />
      <StJawLink selected={pathname === APP_ROUTES.MAIN} onClick={redirectToMain}>{t('public')}</StJawLink>
      <StJawLink selected={pathname === APP_ROUTES.PRIVATE} onClick={redirectToPrivate}>{t('private')}</StJawLink>
      <StJawLink selected={pathname === APP_ROUTES.PENDING} onClick={redirectToPending}>{t('pending')}</StJawLink>
      <CreatePost />
    </StJawWrapper>
  );
};

export default Jaw;
