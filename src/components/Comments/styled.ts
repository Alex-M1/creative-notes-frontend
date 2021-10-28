import styled from 'styled-components';

export const StCommentsContainer = styled.div`
  border: 1px solid #fff;
  border-radius: 10px;
  width: 90%;
  padding: 10px;
  word-break: break-all;
  margin-bottom: 10px;
`;
export const StCommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 53% ;
  &::-webkit-scrollbar {
    width: 7px;
    height: 7px;
}
  &::-webkit-scrollbar-thumb {
    width: 7px;
    background-color: #E2E2E2
  }
`;
