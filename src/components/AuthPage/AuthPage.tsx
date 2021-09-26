import React, { FC } from 'react';
import { TAuthPages } from '@common/types/authTypes';
import AuthForm from './AuthForm';

export interface IProps {
  page: TAuthPages
}

const AuthPage: FC<IProps> = ({ page }) => {
  return (
    <div>
      <AuthForm page={page} />
    </div>
  );
};

export default AuthPage;
