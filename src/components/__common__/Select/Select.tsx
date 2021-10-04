import React, { SyntheticEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { ISelect } from '../types/commonTypes';

interface IProps {
  value: string;
  options: Array<ISelect>;
  onChange: (value: string) => void;
}

export const Select: React.FC<IProps> = ({ value, options, onChange }) => {
  const handleChangeTheme = (e: SyntheticEvent<HTMLSelectElement>) => onChange(e.currentTarget.value);
  const { t } = useTranslation();
  return (
    <select value={value} onChange={handleChangeTheme}>
      {options.map(({ label, value }) => <option key={value} value={value}>{t(label)}</option>)}
    </select>
  );
};
