import React from 'react';
import { PositionProps } from '../styled/types';
import { StImage } from './styled';

interface IProps extends Partial<PositionProps> {
  icon: string;
  onClick?: () => void
}

export const Image: React.FC<IProps> = (
  { icon, ...styledProps },
) => (<StImage src={`../../../assets/img/${icon}`} {...styledProps} />);
