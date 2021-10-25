import React from 'react';
import Image from '@common/Image';
import { StFlex } from '@common/styled/Blocs';
import { StCommentsContainer } from './styled';
import CommentItem from './CommentItem';
import CreateComment from './CreateComment';

interface IProps {
  id: string;
  quantity: number;
}

export const Comments: React.FC<IProps> = ({
  id,
}) => {
  const handleClickPost = () => {

  };
  return (
    <>
      <StCommentsContainer >
        <CommentItem />
        <CreateComment />
      </StCommentsContainer>
    </>
  );
};
