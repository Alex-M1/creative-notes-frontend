import styled from 'styled-components';
import { ITheme } from '@common/styled/types';

interface IJawLink{
  selected?: boolean;
}

export const JawWrapper = styled.div<ITheme>`
  min-height: 7vh;
    color: ${({ colors, theme }) => colors[theme].mainColor};
    border: 4px solid ${({ colors, theme }) => colors[theme].publicPostBorder};
    border-radius: 15px;
  width: 60vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const JawLink = styled.div<IJawLink>`
  cursor: pointer;
   ${({ selected }) => selected && 'border-bottom: solid'};
`;
