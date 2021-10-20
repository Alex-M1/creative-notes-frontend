import Button from '@common/Button';
import { StPostAuthorImg } from '@common/PostContainer/styled';
import { StFlex } from '@common/styled/Blocs';
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
        <StPostAuthorImg src={img || 'assets/img/defaultAvatar.png'} alt="" />
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
