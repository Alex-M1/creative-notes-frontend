import { getNewPassword, getOldPassword } from '@store/user/selectors';
import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Input from '@common/Input';
import Button from '@common/Button';
import { changePassword, cleanPasswordFields, setNewPassword, setOldPassword } from '@store/user/actions';
import { useTheme } from '@hoc/withTheme';
import { StPasswordChange } from './styled';

const PasswordChange: FC = () => {
  const dispatch = useDispatch();
  const oldPassword = useSelector(getOldPassword);
  const newPassword = useSelector(getNewPassword);

  const { colors, theme } = useTheme();

  const handleChangeOldPassword = (value: string) => dispatch(setOldPassword(value));
  const handleChangeNewPassword = (value: string) => dispatch(setNewPassword(value));
  const handleSubmit = () => dispatch(changePassword());

  useEffect(() => {
    return () => {
      dispatch(cleanPasswordFields());
    };
  }, []);

  return (
    <StPasswordChange>
      <Input
        type="password"
        value={oldPassword}
        onChange={handleChangeOldPassword}
        placeholder='old_password'
        width="300px"
        borderRadius="15px"
        borderWidth="10px"
        textAlignInput="center"
        color='white'
        inputHeight="60px"
      />
      <Input
        type="password"
        value={newPassword}
        onChange={handleChangeNewPassword}
        placeholder='new_password'
        width="300px"
        borderRadius="15px"
        borderWidth="10px"
        textAlignInput="center"
        color='white'
        inputHeight="60px"
      />
      <
        Button
        onClick={handleSubmit}
        translateKey="submit"
        width="300px"
        height="50px"
        backgroundColor={colors[theme].buttonBg}
      />
    </StPasswordChange>
  );
};

export default PasswordChange;
