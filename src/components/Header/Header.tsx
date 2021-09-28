import React, { FC } from 'react';
import { StHeader } from './styled';
import Logo from './Logo';
import HeaderControlPanel from './HeaderControlPanel';

const Header: FC = () => {
  return (
    <StHeader>
      <Logo />
      <HeaderControlPanel/>
    </StHeader>
  );
};

export default Header;
