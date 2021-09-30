import styled from 'styled-components';
import {} from '@constants/colors';

import { sizeStyles, borderStyles, fontStyles, positionStyles } from '@common/styled/mixsins';
import { BorderProps, SizesProps, PositionProps, FontProps } from '../styled/types';

export const STTitle = styled.p<BorderProps & SizesProps & PositionProps & FontProps>`
  &&&&{
    ${fontStyles}
    ${sizeStyles}
    ${borderStyles}
    ${positionStyles}
    color: ${({ color }) => color}
  }
`;
