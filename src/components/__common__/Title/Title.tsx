import React from 'react';
import { useTranslation } from 'react-i18next';
import { STTitle } from './styled';

interface IProps {
  translateKey: string;
}

export const Title: React.FC<IProps> = ({
  translateKey,
}) => {
  const { t } = useTranslation();
  return <STTitle>{t(translateKey)}</STTitle>;
};
