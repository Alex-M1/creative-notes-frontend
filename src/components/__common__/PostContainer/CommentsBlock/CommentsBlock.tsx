import React from 'react';
import { StFlex } from '@common/styled/Blocs';
import Image from '@common/Image';

interface IProps {
  quantity: number;
}

export const CommentsBlock: React.FC<IProps> = ({ quantity }) => {
  const handleGetComments = () => {

  };
  return (
    <StFlex cursorPointer onClick={handleGetComments} >
      <Image icon="comment.png" width="24px" />
      {quantity > 0 ? quantity : null}
      comments
    </StFlex>
  );
};
