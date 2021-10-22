import styled from 'styled-components';
import { ITheme } from '@common/styled/types';

interface IJawLink {
  selected?: boolean;
}

export const StJawWrapper = styled.div<ITheme>`
  height: 70vh;
  color: ${({ colors, theme }) => colors[theme].mainColor};
  border: 4px solid ${({ colors, theme }) => colors[theme].publicPostBorder};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px 40px;
`;

export const StJawLink = styled.div<IJawLink>`
  cursor: pointer;
  font-size: 24px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
   ${({ selected }) => selected && 'border-bottom: solid'};
`;
