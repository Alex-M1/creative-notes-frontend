import styled from 'styled-components';
import * as T from './types';
import * as mixins from './mixsins';

export const StGrid = styled.div<T.IStGrid>`
  &&&& {
    display: grid;
    ${({ gap }) => gap && `gap: ${gap};`}
    ${({ columns }) => columns && `grid-template-columns: ${columns};`}
    ${mixins.sizeStyles};
    ${mixins.positionStyles};
    ${mixins.borderStyles};
  }
`;

export const StFlex = styled.div<T.StFlexProps>`
  &&&& {
    ${mixins.flexStyles};
    ${mixins.sizeStyles};
    ${mixins.positionStyles};
    ${mixins.borderStyles};
    ${mixins.fontStyles};
    ${props => props.cursor && `cursor: ${props.cursor};`};
    ${props => props.overflowX && `overflow-x: ${props.overflowX}`};
    ${props => props.background && `background: ${props.background}`}
  }
`;
