import styled from 'styled-components';
import { ITheme } from '../styled/types';

export const StSelect = styled.select<ITheme>`
  padding: 10px;
  background-color:${({ colors, theme }) => colors[theme].selectBg};
  border: 2px solid ${({ colors, theme }) => colors[theme].selectBorder};
  color: ${({ colors, theme }) => colors[theme].selectBorder};
  border-radius: 6px;
  text-align: center;
  font-size: 16px;
  letter-spacing: 2px;
  outline: none;
  position: relative;
  cursor: pointer;
  &:hover{
    box-shadow: 5px -4px 14px 9px rgba(255, 255, 255, 0.2);
  }
`;

export const StOptions = styled.option<ITheme>`
  background:${({ colors, theme }) => colors[theme].selectBg};
  display: inline-block;
  padding: 10px;
`;
