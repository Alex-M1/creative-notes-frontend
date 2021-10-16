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

export const LoginText = styled.p`
  font-size: 15px;
  max-width: 10ch;
  text-overflow: ellipsis;
  overflow-x: hidden;
`;

export const PersonalInfo = styled.div`
  display: flex;
  text-overflow: ellipsis;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;
