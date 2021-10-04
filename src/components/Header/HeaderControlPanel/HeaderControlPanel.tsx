import React, { FC } from 'react';
import Button from '@src/components/__common__/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentLanguage } from '@store/user/selectors';
import { useTranslation } from 'react-i18next';
import { disconnect, setCurrentLanguage } from '@store/user/actions';
import { TRANSPARENT } from '@constants/colors';
import { ReactSVG } from 'react-svg';
import { STHeaderControlPanelWrapper, STHeaderContolPanel, Logout } from './styled';

const HeaderControlPanel: FC = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const currentLanguage = useSelector(getCurrentLanguage);

  const language = { new: 'en' };
  if (language.new === currentLanguage) language.new = 'ru';

  const handleLanguageChange = () => {
    i18n.changeLanguage(language.new);
    dispatch(setCurrentLanguage(language.new));
    localStorage.setItem('lang', language.new);
  };

  const handleDisconnect = () => dispatch(disconnect());

  return (
    <STHeaderControlPanelWrapper>
      <STHeaderContolPanel>
        <Button
          translateKey={currentLanguage}
          onClick={handleLanguageChange}
          fontSize="35px"
          height="100%"
          backgroundColor={TRANSPARENT}
          color="white"
          border="none"
          cursorPointer
        />
        <Logout
          onClick={handleDisconnect}
        >
          <img src="assets/img/logout.png" />
        </Logout>
        
      </STHeaderContolPanel>
    </STHeaderControlPanelWrapper>
  );
};

export default HeaderControlPanel;
