import styled from 'styled-components';
import { ITheme } from '@common/styled/types';

interface IStyledNavLink extends ITheme{
  selected: boolean;
}

export const StPAWrapper = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StPANavigation = styled.div<ITheme>`
  width: 60vw;
  border: ${({ theme, colors }) => `4px solid ${colors[theme].publicPostBorder}`};
  border-radius: 15px;
  background: ${({ theme, colors }) => colors[theme].postWrapperColor};
  min-height: 50px;
  align-self: center;
  display: flex;
  margin-bottom: 30px;
  justify-content: space-around;
  align-items: center;
`;

export const StPANavLink = styled.span<IStyledNavLink>`
  cursor: pointer;
  font-size: 15px;
  ${({ selected }) => selected && 'text-decoration: underline'};
  color: ${({ theme, colors }) => colors[theme].textDecColor};
  text-decoration-color: ${({ theme, colors }) => colors[theme].textDecColor};
`;

export const StPANContent = styled.div<ITheme>`
  border: ${({ theme, colors }) => `4px solid ${colors[theme].publicPostBorder}`};
  border-radius: 15px;
  height: 70vh;
  background: ${({ theme, colors }) => colors[theme].postWrapperColor};
  width: 60vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
