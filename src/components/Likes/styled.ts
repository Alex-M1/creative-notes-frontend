import styled from 'styled-components';

interface IStLike{
  isNoliked?: boolean;
}

export const LikesWrapper = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const LikeCount = styled.p``;

export const LikeImageWrapper = styled.div<IStLike>`
  ${({ isNoliked }) => isNoliked && 'cursor: pointer'};
  height: 20px;
  width: 20px;
  margin: 5px;
`;
