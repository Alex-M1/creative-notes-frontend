import React, { FC } from 'react';
import { TAuthPages } from '@common/types/authTypes';
import AuthForm from './AuthForm';

export interface IProps {
  page: TAuthPages
}

const AuthPage: FC<IProps> = ({ page }) => <AuthForm page={page} />;

export default AuthPage;
