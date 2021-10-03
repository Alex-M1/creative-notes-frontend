import { DEFAULT_COLORS } from '@constants/colors';
import styled from 'styled-components';

export const MainPageWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const PublicPostsWrapper = styled.div`
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
              background-color: ${DEFAULT_COLORS.lightGrey}
            }
`;

export const NoContentLabel = styled.span`
    color: white;
`;
