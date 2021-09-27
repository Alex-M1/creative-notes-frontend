import React from 'react';
import {useTranslation} from 'react-i18next';
import {StLogo} from './styled';


const Logo = () => {
    const { t } = useTranslation();
    return(<StLogo>{t('logo')}</StLogo>)
}

export default Logo;
