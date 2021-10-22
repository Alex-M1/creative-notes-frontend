import { StFlex } from '@common/styled/Blocs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import Image from '@common/Image';
import { APP_ROUTES } from '@constants/appRoutes';
import { StJawLink } from '../styled';

interface IProps {
  redirectToMain: () => void;
  redirectToPrivate: () => void;
  redirectToPending: () => void;
}

export const PostLinks: React.FC<IProps> = ({ redirectToMain, redirectToPending, redirectToPrivate }) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  return (
    <StFlex flexDirection="column" ai="flex-start" width="100%">
      <StJawLink selected={pathname === APP_ROUTES.MAIN} onClick={redirectToMain}>
        <Image icon="email.png" width="24px" margin="0 10px 0 0" />
        {t('public')}
      </StJawLink>
      <StJawLink selected={pathname === APP_ROUTES.PRIVATE} onClick={redirectToPrivate}>
        <Image icon="padlock.png" width="24px" margin="0 10px 0 0" />
        {t('private')}
      </StJawLink>
      <StJawLink selected={pathname === APP_ROUTES.PENDING} onClick={redirectToPending}>
        <Image icon="pending.png" width="24px" margin="0 10px 0 0" />
        {t('pending')}
      </StJawLink>
    </StFlex>
  );
};
