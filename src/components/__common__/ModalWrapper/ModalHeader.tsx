import React from 'react';
import { useTranslation } from 'react-i18next';
import { StFlex } from '../styled/Blocs';

interface IProps {
  headerKey: string;
}

export const ModalHeader: React.FC<IProps> = ({ headerKey }) => {
  const { t } = useTranslation();
  return (
    <StFlex
      ai="center"
      jc="center"
      marginBottom="15px"
    >
      <h1>{t(headerKey)}</h1>
    </StFlex>
  );
};
