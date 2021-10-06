import Button from '@src/components/__common__/Button';
import { StFlex } from '@src/components/__common__/styled/Blocs';
import React from 'react';

interface IProps {
  isSendPost: boolean;
  onClose: () => void;
  publishPostRequest: () => void
  privatePostRequest: () => void
}

export const CreatePostButtons: React.FC<IProps> = ({
  onClose,
  isSendPost,
  privatePostRequest,
  publishPostRequest,
}) => {
  const sendPostPublish = () => {
    publishPostRequest();
    onClose();
  };
  const sendPostPrivate = () => {
    privatePostRequest();
    onClose();
  };
  return (
    <StFlex jc="space-between" margin="15px 0">
      <Button disabled={isSendPost} translateKey="private_post" width="200px" fontSize="16px" onClick={sendPostPrivate} />
      <Button disabled={isSendPost} translateKey="publish_post" width="200px" fontSize="16px" onClick={sendPostPublish} />
    </StFlex>
  );
};
