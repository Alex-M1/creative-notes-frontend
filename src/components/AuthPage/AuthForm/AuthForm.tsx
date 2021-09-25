import React from 'react';
import { Title } from '@src/components/__common__';
import { StFlex } from '@common/styled/Blocs';
import { TAuthPages } from '@src/components/__common__/types/authTypes';
import { setAuthPageProps } from '@src/helpers/authHelpers';
import AuthInput from './AuthInput';
import AuthButton from './AuthButton';

export interface IProps {
  page: TAuthPages;
}

export const AuthForm: React.FC<IProps> = ({ page }) => {
  const authProps = setAuthPageProps(page);
  return (
    <StFlex
      ai="center"
      flexDirection="column"
    >
      <Title translateKey={authProps.title} />
      {
        Object.values(authProps.inputKey).map(type => (
          <AuthInput key={type} type={type} />
        ))
      }
      <AuthButton translateKey={`${authProps.title}_btn`} />
    </StFlex>
  );
};
