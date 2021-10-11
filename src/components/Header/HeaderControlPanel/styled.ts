import styled from 'styled-components';

export const STHeaderControlPanelWrapper = styled.div`
  min-width: 450px;
`;

export const STHeaderContolPanel = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
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

export const PesronalArea = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  cursor: pointer;
`;
