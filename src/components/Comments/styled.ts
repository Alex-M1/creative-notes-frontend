import styled, { css, keyframes } from 'styled-components';

const openKeyframe = keyframes`
  0% {
    height:0;
    transition-duration: 3s;
  }
  100% {
    height: 500px;
    transition-duration: 3s;
  }
`;

const openAnimation = css`
  animation: 1s linear ${openKeyframe} forwards;
`;

export const StCommentsContainer = styled.div`
  border-top: 1px solid #fff;
  height:0;
  ${openAnimation}
`;
