import React from 'react';
import { PositionProps } from '../styled/types';
import { StImage } from './styled';

interface IProps extends Partial<PositionProps> {
  icon: string;
}

export const Image: React.FC<IProps> = (props) => {
  const { icon, ...styledProps } = props;
  return <StImage src={`../../../assets/img/${icon}`} {...styledProps} />;
};
