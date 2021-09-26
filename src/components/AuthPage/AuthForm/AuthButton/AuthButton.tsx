import React from 'react';
import Button from '@common/Button';

interface IProps {
  translateKey: string;
}

export const AuthButton: React.FC<IProps> = ({ translateKey }) => {
  return <Button onClick={() => 'click'} translateKey={translateKey} />;
};
