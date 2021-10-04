import React from 'react';

interface IProps {
  value: string;
  onChange: (value: string) => void
}

export const TextArea: React.FC<IProps> = ({ value, onChange }) => {
  const handleChange = (e: React.SyntheticEvent<HTMLTextAreaElement>) => onChange(e.currentTarget.value);
  return <textarea value={value} onChange={handleChange} />;
};
