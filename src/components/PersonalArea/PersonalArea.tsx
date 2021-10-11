import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'react-router-redux';
import { APP_ROUTES, SUB_APP_ROUTES } from '@constants/appRoutes';
import { useTranslation } from 'react-i18next';
import { getUserRole } from '@store/user/selectors';
import { ROLES } from '@constants/roles';
import withContent from '@hoc/withContent';
import { useTheme } from '@hoc/withTheme';

import { StPAWrapper, StPANavigation, StPANavLink, StPANContent } from './styled';
import PasswordChange from './PasswordChange';
import AdditionalFields from './AdditionalFields';

const PersonalArea = () => {
  const { search } = useLocation();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const userRole = useSelector(getUserRole);
  const themeProps = useTheme();

  const isNeedToShowAdminPanel = userRole === ROLES.SUPER_ADMIN;
  const isNeedToShowUserAdditionalFields = search === `?PA=${SUB_APP_ROUTES.CHANGE_INFO}`;
  const isNeedToShowUserPasswordChange = search === `?PA=${SUB_APP_ROUTES.CHANGE_PASSWORD}`;

  const handleNavClick = (e) => {
    dispatch(push(`${APP_ROUTES.PERSONAL_AREA}?PA=${e.target.id}`));
    localStorage.setItem('personalAreaPath', e.target.id);
  };  

  useEffect(() => {
    const subRoute = localStorage.getItem('personalAreaPath');
    if (!subRoute) {
      localStorage.setItem('personalAreaPath', SUB_APP_ROUTES.CHANGE_INFO);
      dispatch(push(`${APP_ROUTES.PERSONAL_AREA}?PA=${SUB_APP_ROUTES.CHANGE_INFO}`));
    } else {
      dispatch(push(`${APP_ROUTES.PERSONAL_AREA}?PA=${subRoute}`));
    }
  }, []);

  return (
    <StPAWrapper>
      <StPANavigation {...themeProps}>
        <StPANavLink
          onClick={handleNavClick}
          id={SUB_APP_ROUTES.CHANGE_INFO}
          selected={search === `?PA=${SUB_APP_ROUTES.CHANGE_INFO}`}
          {...themeProps}
        >
          {t('change-info')}
        </StPANavLink >
        <StPANavLink
          onClick={handleNavClick}
          id={SUB_APP_ROUTES.CHANGE_PASSWORD}
          selected={search === `?PA=${SUB_APP_ROUTES.CHANGE_PASSWORD}`}
          {...themeProps}
        >
          {t('change-password')}
        </StPANavLink >
        {isNeedToShowAdminPanel && (
          <StPANavLink
            onClick={handleNavClick}
            id={SUB_APP_ROUTES.ADMIN_PANEL}
            selected={search === `?PA=${SUB_APP_ROUTES.ADMIN_PANEL}`}
            {...themeProps}
          >
            {t('admin-panel')}
          </StPANavLink >
        )}
      </StPANavigation>
      {search && (
        <StPANContent {...themeProps}>
          {isNeedToShowUserPasswordChange && (
            <PasswordChange />
          )}
          {isNeedToShowUserAdditionalFields && (
            <AdditionalFields />
          )}
        </StPANContent>
      )}
    </StPAWrapper>
  );
};

export default withContent(PersonalArea);
