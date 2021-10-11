import styled from 'styled-components';
import { ITheme } from '../styled/types';

export const StTextArea = styled.textarea<ITheme>`
  background: ${({ colors, theme }) => colors[theme].textAreaBg};
  color: ${({ colors, theme }) => colors[theme].color};
  font-size: 16px;
  resize: none;
  height: 200px;
  border-radius: 6px;
  padding: 15px 20px;
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
