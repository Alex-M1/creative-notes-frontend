import { CREATE_THEME_OPTIONS, ThemesKey } from '@constants/posts';
import Select from '@src/components/__common__/Select';
import { StFlex } from '@src/components/__common__/styled/Blocs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StSpan } from './styled';

interface IProps {
  theme: ThemesKey;
  setPostTheme: (value: string) => void
}

export const ChangePostTheme: React.FC<IProps> = ({ theme, setPostTheme }) => {
  const handleChangeTheme = (theme: string) => setPostTheme(theme);
  const { t } = useTranslation();
  return (
    <StFlex ai="center" marginBottom="25px" jc="flex-end">
      <StSpan>
        {t('post_theme')}
        :
      </StSpan>
      <Select onChange={handleChangeTheme} value={theme} options={CREATE_THEME_OPTIONS} />
    </StFlex>
  );
};
