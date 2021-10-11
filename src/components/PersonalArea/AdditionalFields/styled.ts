import styled from 'styled-components';

interface IChangeble{
  changeble?: boolean;
}

export const StAFWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  position: relative;
`;

export const StAFAvaContainter = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StAFAvatar = styled.img<IChangeble>`
  ${({ changeble }) => changeble && 'cursor: pointer'};
  width: 350px;
  height: 350px;
  border-radius: 50%;
`;

export const StAFFields = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width:50%;
`;

export const StAFLabel = styled.span`
  display: grid;
  grid-template: 1fr / 0.5fr 2fr;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-top: 30px;
  margin-left: 30px;
`;

export const StChanges = styled.img`
  height: 35px;
  width: 35px;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;
