import React from 'react';
import { Input, Title } from 'src/components/__common__';

interface IProps {

}

export const AuthForm: React.FC<IProps> = ({ }) => {
  return (
    <div>
      <Title translateKey="sign_up" />
    </div>
  );
};
