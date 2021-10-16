import { StFlex } from '@src/components/__common__/styled/Blocs';
import { IAdminsUser } from '@store/user/types';
import React, { useEffect } from 'react';
import AdminPanelItem from './AdminPanelItem';

interface IProps {
  users: Array<IAdminsUser>,
  getUsersRequest: () => void
}

export const AdminPanel: React.FC<IProps> = ({ users, getUsersRequest }) => {
  useEffect(() => {
    getUsersRequest();
  }, []);

  return (
    <StFlex
      width="100%"
      flexDirection="column"
      padding="15px 25px"
      jc='center'
    >
      {users?.map(user => (
        <AdminPanelItem key={user.login} {...user} />
      ))}
    </StFlex>
  );
};
