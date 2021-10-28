import styled from 'styled-components';
import { sizeStyles, borderStyles, fontStyles, positionStyles } from '@common/styled/mixsins';
import { TEXT_COLOR_DEFAULT } from '../../../constants/colors';
import { BorderProps, SizesProps, PositionProps, FontProps, ColorsProps, ITheme } from '../styled/types';

export const StButton = styled.button<BorderProps & SizesProps & PositionProps & FontProps & ColorsProps & ITheme>`
  &&&&{
    ${fontStyles}
    ${sizeStyles}
    ${borderStyles}
    ${positionStyles}
  }
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ color = TEXT_COLOR_DEFAULT }) => color};
  background-color: ${({ colors, theme }) => colors[theme].buttonBg};
  &:hover{
    background-color: ${({ colors, theme }) => colors[theme].buttonHover};
  }
  &:disabled{
    background-color: ${({ colors, theme }) => colors[theme].disabled};
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
