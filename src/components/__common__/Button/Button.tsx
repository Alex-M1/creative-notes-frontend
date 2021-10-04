import React from 'react';
import { useTranslation } from 'react-i18next';
import { SizesProps, BorderProps, FontProps, PositionProps } from '../styled/types';
import { StButton } from './styled';

interface IProps extends SizesProps, BorderProps, FontProps, PositionProps {
  translateKey?: string;
  onClick: () => void
}

export const Button: React.FC<IProps> = ({
  width = '100px',
  padding = '10px',
  textAlign = 'center',
  onClick,
  translateKey,
  ...props
}) => {
  const { t } = useTranslation();
  return (
    <StButton
      width={width}
      padding={padding}
      textAlign={textAlign}
      onClick={onClick}
      {...props}
    >
      {t(translateKey)}
    </StButton >
  );
};
