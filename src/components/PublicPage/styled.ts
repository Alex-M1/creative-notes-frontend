import styled from 'styled-components';
import { ITheme } from '@common/styled/types';

export const MainPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 9fr;
`;

export const PublicPostsWrapper = styled.div<ITheme>`
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
