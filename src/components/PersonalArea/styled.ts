import { colors } from '@constants/colors';
import styled from 'styled-components';

interface IStyledNavLink{
  selected: boolean;
  theme: string;
  colors: typeof colors;
}

export const StPAWrapper = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
`;

export const StPANavigation = styled.div`
  width: 20vw;
  min-height: 50px;
  align-self: center;
  display: grid;
  border: 1px solid white;
  grid-template: 1fr / 1fr 1fr;
  justify-items: center;
  align-items: center;
`;

export const StPANavLink = styled.span<IStyledNavLink>`
  cursor: pointer;
  font-size: 25px;
  ${({ selected }) => selected && 'text-decoration: underline'};
  color: ${({ theme, colors }) => colors[theme].textDecColor};
  text-decoration-color: ${({ theme, colors }) => colors[theme].textDecColor}
`;
