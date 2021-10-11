import styled from 'styled-components';
import { ITheme } from '@common/styled/types';

export const PrivatePageWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const PrivatePostsWrapper = styled.div<ITheme>`
  width: 60vw;
  height: 85vh;
  padding:5px;
  display: 'flex';
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
    overflow-y: auto;
        ::-webkit-scrollbar {
          width: 7px;
          height: 7px;
        }
            ::-webkit-scrollbar-thumb {
              width: 7px;
                background-color: ${({ colors, theme }) => colors[theme].publicPostBorder};
            }
`;

export const NoContentLabel = styled.span`
    color: white;
`;
