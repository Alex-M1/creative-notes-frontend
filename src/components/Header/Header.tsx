import React, { FC } from 'react';
import { StHeader, StHeaderContent } from './styled';
import Logo from './Logo';
import HeaderControlPanel from './HeaderControlPanel';

const Header: FC = () => (
  <StHeader>
    <StHeaderContent>
      <Logo />
      <HeaderControlPanel />
    </StHeaderContent>
  </StHeader>
);

export default Header;
