import React from 'react';
import { StPostContent, StPostContentText } from '../styled';

interface IProps {
  content: string;
}

export const PostContent: React.FC<IProps> = ({ content }) => {
  return (
    <StPostContent>
      <StPostContentText>
        {content}
      </StPostContentText>
    </StPostContent>
  );
};
