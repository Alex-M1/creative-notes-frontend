import styled from 'styled-components';
import { ITheme } from '@common/styled/types';

interface IJawLink {
  selected?: boolean;
}

export const StJawWrapper = styled.div<ITheme>`
  min-height: 7vh;
  color: ${({ colors, theme }) => colors[theme].mainColor};
  border: 4px solid ${({ colors, theme }) => colors[theme].publicPostBorder};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const StJawLink = styled.div<IJawLink>`
  cursor: pointer;
   ${({ selected }) => selected && 'border-bottom: solid'};
`;
