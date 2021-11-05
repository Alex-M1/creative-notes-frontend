import TextArea from '@src/components/__common__/TextArea';
import React from 'react';

interface IProps {
  createPostValue: string;
  setPostValue: (value: string) => void
}

export const PostInput: React.FC<IProps> = ({ createPostValue, setPostValue }) => {
  return (
    <TextArea
      height='200px'
      padding="15px 20px"
      value={createPostValue}
      onChange={setPostValue}
      placeholderKey='create_post_plh'
    />
  );
};
