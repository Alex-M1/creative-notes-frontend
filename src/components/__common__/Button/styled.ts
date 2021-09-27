import styled from 'styled-components';
import { sizeStyles, borderStyles, fontStyles, positionStyles} from '@common/styled/mixsins';
import { BorderProps, SizesProps, PositionProps, FontProps, ColorsProps } from '../styled/types';

export const StButton = styled.button<BorderProps & SizesProps & PositionProps & FontProps & ColorsProps>`
  &&&&{
    ${fontStyles}
    ${sizeStyles}
    ${borderStyles}
    ${positionStyles}
  }
`;
