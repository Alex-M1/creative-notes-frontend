import React from 'react';
import Button from '@common/Button';
import { StPostButtons } from '../styled';

interface IProps {
  id: string;
  rejectPendingPost: (id: string) => void;
  resolvePendingPost: (id: string) => void;
}

export const PendingButtons: React.FC<IProps> = ({ id, rejectPendingPost, resolvePendingPost }) => {
  const handleReject = () => rejectPendingPost(id);
  const handleResolve = () => resolvePendingPost(id);
  return (
    <StPostButtons>
      <Button translateKey="reject" onClick={handleReject} />
      <Button translateKey="resolve" onClick={handleResolve} />
    </StPostButtons>
  );
};
