import React from 'react';
import { Input } from '@src/components/__common__';
import { TAuthInput } from '@src/components/__common__/types/authTypes';
import { typeOfInput } from '@src/helpers/authHelpers';
import { IAuthInputPld } from '@store/auth/types';

export interface IProps {
  type: TAuthInput;
  value: string;
  onChange: ({ name, value }: IAuthInputPld) => void;
}

export const AuthInput: React.FC<IProps> = ({ type, value, onChange }) => {
  const handleChangeInput = (value: string) => {
    onChange({ name: type, value });
  };

  return (
    <div>
      <Input
        type={typeOfInput(type)}
        value={value}
        onChange={handleChangeInput}
        placeholder={`${type}_plh`}
        width="300px"
        borderRadius="15px"
        borderWidth="10px"
        textAlignInput="center"
        color='white'
        inputHeight="60px"
      />
    </div>
  );
};
