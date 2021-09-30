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
  const { title, inputKey, page: currentPage } = setAuthPageProps(page);
  return (
    <StFlex
      ai="center"
      flexDirection="column"
      justifyContent="space-evenly"
      height="80vh"
    >
      <Title translateKey={title} />
      {
        Object.values(inputKey).map(type => (
          <AuthInput key={type} type={type}/>
        ))
      }
      <AuthButton currentPage={currentPage} translateKey={`${title}_btn`} />
    </StFlex>
  );
};
