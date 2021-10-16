import styled from 'styled-components';
import { ITheme } from '../styled/types';

export const StFileIpt = styled.label<ITheme>`
  display: inline-block;
  background-color: ${({ colors, theme }) => colors[theme].buttonBg};
  color:  ${({ colors, theme }) => colors[theme].color};
  padding: 0.25rem 1rem;
  font-family: sans-serif;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
