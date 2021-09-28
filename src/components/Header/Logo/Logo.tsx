import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { StLogo } from './styled';

const Logo: FC = () => {
  const { t } = useTranslation();
  return (<StLogo>{t('logo')}</StLogo>);
};

export default Logo;
