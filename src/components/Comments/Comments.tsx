import React from 'react';
import Image from '@common/Image';

interface IProps {
  id: string;
  quantity: number;
}

export const Comments: React.FC<IProps> = ({
  id,
  quantity,
}) => {
  return (
    <div >
      <Image icon="comment.png" width="24px" />
      comments
    </div>
  );
};
