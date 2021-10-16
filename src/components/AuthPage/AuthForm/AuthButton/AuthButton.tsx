import React from 'react';
import Button from '@common/Button';
import { DEFAULT_COLORS } from '@constants/colors';
import { authSubmit } from '@store/auth/actions';
import { useDispatch } from 'react-redux';

interface IProps {
  translateKey: string;
  currentPage: string;
}

export const AuthButton: React.FC<IProps> = ({ translateKey, currentPage }) => {
  const dispatch = useDispatch();
  const authSubmitHandler = () => dispatch(authSubmit({ currentPage }));

  return (
    <
      Button
      onClick={authSubmitHandler}
      translateKey={translateKey}
      width="200px"
      backgroundColor={DEFAULT_COLORS.transparentGrey}
    />
  );
};
