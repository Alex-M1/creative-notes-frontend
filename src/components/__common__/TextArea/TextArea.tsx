import { useTheme } from '@src/components/hoc/withTheme';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StTextArea } from './styled';

interface IProps {
  value: string;
  placeholderKey: string;
  onChange: (value: string) => void
}

export const TextArea: React.FC<IProps> = ({ value, placeholderKey, onChange }) => {
  const handleChange = (e: React.SyntheticEvent<HTMLTextAreaElement>) => onChange(e.currentTarget.value);
  const { colors, theme } = useTheme();
  const { t } = useTranslation();
  return (
    <StTextArea
      colors={colors}
      theme={theme}
      value={value}
      placeholder={t(placeholderKey)}
      onChange={handleChange}
    />
  );
};
