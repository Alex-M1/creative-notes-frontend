import React, {FC} from 'react';
import {StHeader} from './styled';
import StLogo from './Logo';

const Header: FC = () => {
    return (
        <StHeader>
            <StLogo/>
        </StHeader>
    );
};


export default Header;
