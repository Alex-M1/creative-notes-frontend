import React from 'react';
import { Input } from 'src/components/__common__';
import { IInputChangeArg } from 'common/Input/types';
import { TAuthInput } from 'common/types/commonTypes';
import { typeOfInput } from 'src/helpers/authHelpers';

interface IProps {
  type: TAuthInput;
  value: string;
  onChange: (value: string) => void;
}

export const AuthInput: React.FC<IProps> = ({ type, value, onChange }) => {
  const handleChangeInput = (arg: IInputChangeArg) => {
    onChange(arg.value);
  };

  return (
    <div>
      <Input
        type={typeOfInput(type)}
        value={value}
        onChange={handleChangeInput}
        placeholder={`${type}_plh`}
      />
    </div>
  );
};
