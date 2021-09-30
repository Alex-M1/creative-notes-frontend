import styled from 'styled-components';
import { sizeStyles, borderStyles, fontStyles, positionStyles } from '@common/styled/mixsins';
import { TEXT_COLOR_DEFAULT, TRANSPARENT } from '../../../constants/colors';
import { BorderProps, SizesProps, PositionProps, FontProps, ColorsProps } from '../styled/types';

export const StButton = styled.button<BorderProps & SizesProps & PositionProps & FontProps & ColorsProps>`
  &&&&{
    ${fontStyles}
    ${sizeStyles}
    ${borderStyles}
    ${positionStyles}
  }
  color: ${({ color = TEXT_COLOR_DEFAULT }) => color};
  background-color: ${({ backgroundColor = TRANSPARENT }) => (backgroundColor)};
`;
