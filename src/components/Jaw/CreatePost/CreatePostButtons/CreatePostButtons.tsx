import Button from '@src/components/__common__/Button';
import { StFlex } from '@src/components/__common__/styled/Blocs';
import { notifications } from '@src/helpers/notifications';
import React from 'react';

interface IProps {
  isSendPost: boolean;
  postValue: string;
  isAnonymous: boolean;
  onClose: () => void;
  publishPostRequest: () => void
  privatePostRequest: () => void
}

export const CreatePostButtons: React.FC<IProps> = ({
  onClose,
  postValue,
  isSendPost,
  isAnonymous,
  privatePostRequest,
  publishPostRequest,
}) => {
  const sendPostPublish = () => {
    if (postValue?.length > 6000) return notifications({ type: 'error', message: 'very_long_note' });
    publishPostRequest();
    onClose();
  };
  const sendPostPrivate = () => {
    if (postValue?.length > 6000) return notifications({ type: 'error', message: 'very_long_note' });
    privatePostRequest();
    onClose();
  };
  return (
    <StFlex jc="space-between" margin="15px 0">
      <Button disabled={isSendPost || isAnonymous} translateKey="private_post" width="200px" fontSize="16px" onClick={sendPostPrivate} />
      <Button disabled={isSendPost} translateKey="publish_post" width="200px" fontSize="16px" onClick={sendPostPublish} />
    </StFlex>
  );
};
