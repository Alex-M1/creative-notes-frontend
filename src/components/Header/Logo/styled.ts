import styled from 'styled-components';
import { TEXT_COLOR_DEFAULT } from '@constants/colors';

export const StLogo = styled.span`
  color: ${({ color = TEXT_COLOR_DEFAULT }) => color};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
