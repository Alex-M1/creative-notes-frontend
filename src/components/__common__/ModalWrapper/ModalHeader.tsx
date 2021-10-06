import React from 'react';
import { useTranslation } from 'react-i18next';
import { StFlex } from '../styled/Blocs';

interface IProps {
  headerKey: string;
  onClose: () => void
}

export const ModalHeader: React.FC<IProps> = ({ headerKey, onClose }) => {
  const { t } = useTranslation();
  return (
    <StFlex
      ai="center"
      jc="center"
      marginBottom="15px"
      position='relative'
    >
      <h1>{t(headerKey)}</h1>
      <StFlex
        position='absolute'
        color='#fff'
        right='0'
        fontSize='24px'
        cursor='pointer'
        onClick={onClose}
      >
        ✖
      </StFlex>
    </StFlex >
  );
};
