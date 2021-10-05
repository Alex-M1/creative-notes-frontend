import TextArea from '@src/components/__common__/TextArea';
import React from 'react';

interface IProps {
  createPostValue: string;
  setPostValue: (value: string) => void
}

export const PostInput: React.FC<IProps> = ({ createPostValue, setPostValue }) => (
  <TextArea value={createPostValue} onChange={setPostValue} />
);
