import { CREATE_THEME_OPTIONS, ThemesKey } from '@constants/posts';
import Select from '@src/components/__common__/Select';
import React from 'react';

interface IProps {
  theme: ThemesKey;
  setPostTheme: (value: string) => void
}

export const ChangePostTheme: React.FC<IProps> = ({ theme, setPostTheme }) => {
  const handleChangeTheme = (theme: string) => setPostTheme(theme);

  return <Select onChange={handleChangeTheme} value={theme} options={CREATE_THEME_OPTIONS} />;
};
