import TextArea from '@common/TextArea';
import Button from '@common/Button';
import React from 'react';
import { StGrid } from '@common/styled/Blocs';

interface IProps {
  value: string;
  postId: string;
  createComment: (postId: string) => void,
  changeCommentValue: (value: string) => void;
}

export const CreateComment: React.FC<IProps> = ({ value, postId, createComment, changeCommentValue }) => {
  const handleSendPost = () => createComment(postId);
  const handlePostValueChange = (value: string) => changeCommentValue(value);
  return (
    <StGrid
      height="60px"
      columns="85% 15%"
      width="65%"
      gap="10px"
      margin="10px 0 0 0"
      position="fixed"
      bottom='20px'
    >
      <TextArea placeholderKey="write_comment" value={value} onChange={handlePostValueChange} />
      <Button translateKey="send_post" onClick={handleSendPost} />
    </StGrid >
  );
};
