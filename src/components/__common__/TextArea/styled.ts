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
  }
  &:focus{
    box-shadow: 5px -4px 14px 9px rgba(255, 255, 255, 0.2);
  }
`;
