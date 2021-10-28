import styled from 'styled-components';
import { ITheme, SizesProps } from '../styled/types';
import * as mixins from '../styled/mixsins';

type TStTextArea = ITheme & SizesProps;
export const StTextArea = styled.textarea<TStTextArea>`
  ${mixins.sizeStyles}
  background: ${({ colors, theme }) => colors[theme].textAreaBg};
  color: ${({ colors, theme }) => colors[theme].color};
  font-size: 16px;
  resize: none;
  border-radius: 6px;
  &::placeholder{
    font-style: italic;
    color: ${({ colors, theme }) => colors[theme].color};
  }
  &:focus{
    outline: none !important;
    box-shadow: 0 0 10px #719ECE;
    border: 2px solid ${({ colors, theme }) => colors[theme].color};
  }
`;
