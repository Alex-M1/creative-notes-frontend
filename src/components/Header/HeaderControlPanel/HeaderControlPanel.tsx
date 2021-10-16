import React, { FC } from 'react';
import Button from '@src/components/__common__/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentLanguage, getInitStatus, getUserImg, getUserLogin } from '@store/user/selectors';
import { useTranslation } from 'react-i18next';
import { disconnect, setCurrentLanguage } from '@store/user/actions';
import { TRANSPARENT } from '@constants/colors';
import { useTheme } from '@src/components/hoc/withTheme';
import { APP_ROUTES } from '@constants/appRoutes';
import { push } from 'react-router-redux';
import {
  STHeaderControlPanelWrapper,
  STHeaderContolPanel,
  Logout,
  PesronalArea,
  LoginText,
  PersonalInfo,
} from './styled';

const HeaderControlPanel: FC = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const { theme, changeTheme } = useTheme();

  const currentLanguage = useSelector(getCurrentLanguage);
  const isInit = useSelector(getInitStatus);
  const userLogin = useSelector(getUserLogin);
  const userAvatar = useSelector(getUserImg);

  const language = { new: 'en' };
  if (language.new === currentLanguage) language.new = 'ru';

  const handleThemeChange = () => {
    changeTheme();
  };

  const handlePersonalAreaRedirect = () => {
    dispatch(push(APP_ROUTES.PERSONAL_AREA));
  };

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
          translateKey={theme}
          onClick={handleThemeChange}
          fontSize="15px"
          height="50px"
          width="80px"
          backgroundColor={TRANSPARENT}
          color="white"
          border="none"
          cursorPointer
        />
        <Button
          translateKey={currentLanguage}
          onClick={handleLanguageChange}
          fontSize="15px"
          height="50px"
          width="80px"
          backgroundColor={TRANSPARENT}
          color="white"
          border="none"
          cursorPointer
        />
        
        {isInit && (
          <>
            <PersonalInfo>
              <PesronalArea
                src={userAvatar || 'assets/img/defaultAvatar.png'} 
                onClick={handlePersonalAreaRedirect}
              />
              <LoginText title={userLogin}>{userLogin}</LoginText>
            </PersonalInfo>
            <Logout onClick={handleDisconnect}>
              <img src="assets/img/logout.png" />
            </Logout>
          </>
        )}
        
      </STHeaderContolPanel>
    </STHeaderControlPanelWrapper>
  );
};

export default HeaderControlPanel;
