import { useTheme } from '@src/components/hoc/withTheme';
import React, { SyntheticEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { ISelect } from '../types/commonTypes';
import { StSelect, StOptions } from './styled';

interface IProps {
  value: string;
  options: Array<ISelect>;
  onChange: (value: string) => void;
}

export const Select: React.FC<IProps> = ({ value, options, onChange }) => {
  const handleChangeTheme = (e: SyntheticEvent<HTMLSelectElement>) => onChange(e.currentTarget.value);
  const { t } = useTranslation();
  const { colors, theme } = useTheme();
  return (
    <StSelect
      colors={colors}
      theme={theme}
      value={value}
      onChange={handleChangeTheme}
    >
      {options.map(({ label, value }) => (
        <StOptions
          key={value}
          value={value}
          colors={colors}
          theme={theme}
        >
          {t(label)}
        </StOptions>
      ))}
    </StSelect>
  );
};
