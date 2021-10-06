import styled from 'styled-components';

export const STHeaderControlPanelWrapper = styled.div`
/*   display: flex;
  justify-content: flex-end;
  align-items: center; */
  min-width: 300px;
`;

export const STHeaderContolPanel = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Logout = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding-left:30px;
  img {
      height: 50px;
      width: 50px;
  }
`;
