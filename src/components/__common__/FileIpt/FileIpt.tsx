import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@src/components/hoc/withTheme';
import { toBase64 } from '@src/helpers/toBase64';
import { ISetImg } from '@store/user/types';
import { StFileIpt } from './styled';

interface IProps {
  value: string;
  onChange: (payload: ISetImg) => void
}

const FileIpt: React.FC<IProps> = ({ value, onChange }) => {
  const { colors, theme } = useTheme();
  const { t } = useTranslation();
  const onFileChange = async (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const code = await toBase64(target.files[0]);
    onChange({ imgName: target.files[0].name, code });
  };
  return (
    <>
      <StFileIpt htmlFor="upload" colors={colors} theme={theme}>{value || t('choose_file')}</StFileIpt>
      <input type="file" id="upload" hidden onChange={onFileChange} />
    </>
  );
};

export default FileIpt;
