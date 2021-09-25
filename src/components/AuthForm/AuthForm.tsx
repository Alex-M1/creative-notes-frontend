import React from 'react';
import { AuthInputType } from '@constants/auth';
import { Title } from '@src/components/__common__';
import { StFlex } from '@common/styled/Blocs';
import AuthInput from './AuthInput';

export const AuthForm: React.FC = () => {
  return (
    <StFlex flexDirection="column" >
      <Title translateKey="sign_up" />
      {
        Object.values(AuthInputType).map(type => (
          <AuthInput key={type} type={type} />
        ))
      }
    </StFlex>
  );
};
