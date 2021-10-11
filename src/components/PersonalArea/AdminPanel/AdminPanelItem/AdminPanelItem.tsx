import { PublicPostAuthorImg } from '@src/components/PublicPost/styled';
import Button from '@src/components/__common__/Button';
import { StFlex } from '@src/components/__common__/styled/Blocs';
import { TChangeRole } from '@store/user/types';
import React from 'react';

interface IProps {
  _id: string;
  img?: string;
  login: string;
  online: boolean;
  role: string;
  changeUserRole: (payload: TChangeRole) => void;
}

export const AdminPanelItem: React.FC<IProps> = ({ _id, img, login, online, role, changeUserRole }) => {
  const onChangeRole = () => {
    changeUserRole({ user: _id, role: role === 'User' ? 'Manager' : 'User' });
  };
  return (
    <StFlex
      jc="space-between"
      border="1px solid #fff"
      borderRadius='7px'
      padding="10px 5px"
      marginBottom='10px'
      ai="center"
    >
      <div>
        <PublicPostAuthorImg src={img || 'assets/img/defaultAvatar.png'} alt="" />
        <span>{online}</span>
      </div>
      <span>{login}</span>
      <span>{role}</span>
      <Button
        onClick={onChangeRole}
        translateKey={role === 'User' ? 'to_manager' : 'to_user'}
      />
    </StFlex >
  );
};
