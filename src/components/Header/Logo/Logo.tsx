import { APP_ROUTES } from '@constants/appRoutes';
import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { push } from 'react-router-redux';
import { StLogo } from './styled';

const Logo: FC = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const handleMainPageRedirect = useCallback(() => {
    if (pathname !== APP_ROUTES.LOGIN && pathname !== APP_ROUTES.REGISTRATION) {
      dispatch(push(APP_ROUTES.MAIN));
    }
  }, [pathname]);

  const { t } = useTranslation();
  return (<StLogo onClick={handleMainPageRedirect}>{t('logo')}</StLogo>);
};

export default Logo;
