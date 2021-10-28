import React, { FC } from 'react';
import { StFlex } from '@common/styled/Blocs';
import { useTranslation } from 'react-i18next';
import { StAnonymousCheckbox, StAnonymousText } from './styled';
import { IChangeAnonymous } from './types';

const ChangeAnonymous: FC<IChangeAnonymous> = ({ isAnonymous, setPostIsAnonim }) => {
  const { t } = useTranslation();

  const onChangeHandler = () => setPostIsAnonim(!isAnonymous);

  return (
    <StFlex
      minHeight="50px"
      ai="center"
    >
      <StAnonymousCheckbox
        type='checkbox'
        checked={isAnonymous}
        onChange={onChangeHandler}
      />
      <StAnonymousText>{t('anonymous')}</StAnonymousText>
    </StFlex>
  );
};

export default ChangeAnonymous;
