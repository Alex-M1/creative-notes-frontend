import Button from '@src/components/__common__/Button';
import { StFlex } from '@src/components/__common__/styled/Blocs';
import React from 'react';

interface IProps {
  publishPostRequest: () => void
  privatePostRequest: () => void
}

export const CreatePostButtons: React.FC<IProps> = ({ privatePostRequest, publishPostRequest }) => {
  return (
    <StFlex jc="space-between" margin="15px 0">
      <Button translateKey="private_post" width="200px" fontSize="16px" onClick={privatePostRequest} />
      <Button translateKey="publish_post" width="200px" fontSize="16px" onClick={publishPostRequest} />
    </StFlex>
  );
};
