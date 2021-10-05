import TextArea from '@src/components/__common__/TextArea';
import React from 'react';

interface IProps {
  createPostValue: string;
  setPostValue: (value: string) => void
}

export const PostInput: React.FC<IProps> = ({ createPostValue, setPostValue }) => {
  return (
    <TextArea value={createPostValue} onChange={setPostValue} placeholderKey='create_post_plh' />
  );
};
