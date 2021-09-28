import React, { FC } from 'react';
import Button from '@src/components/__common__/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentLanguage } from '@store/user/selectors';
import { useTranslation } from 'react-i18next';
import { setCurrentLanguage } from '@store/user/actions';
import { STHeaderControlPanelWrapper, STHeaderContolPanel } from './styled';

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

  return (
    <STHeaderControlPanelWrapper>
      <STHeaderContolPanel>
        <Button
          translateKey={currentLanguage}
          onClick={handleLanguageChange}
          fontSize="35px"
          height="100%"
          backgroundColor="black"
          color="white"
          border="none"
          cursorPointer
        />
      </STHeaderContolPanel>
    </STHeaderControlPanelWrapper>
  );
};

export default HeaderControlPanel;
