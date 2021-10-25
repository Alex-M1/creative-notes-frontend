import { useTheme } from '@src/components/hoc/withTheme';
import { IPost } from '@store/posts/types';
import React from 'react';
import PostContent from './PostContent';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import { StPostContainer } from './styled';

interface IProps extends IPost {
  currentUserRole: string;
}

export const PostContainer: React.FC<IProps> = ({
  _id,
  theme,
  author,
  content,
  comments,
  created_at,
  currentUserRole,
}) => {
  const themeProps = useTheme();
  delete themeProps.changeTheme;
  return (
    <StPostContainer {...themeProps}>
      <PostHeader postTheme={theme} theme={themeProps} author={author} userRole={currentUserRole} />
      <PostContent content={content} />
      <PostFooter comments={comments} id={_id} createdAt={created_at} userRole={currentUserRole} theme={themeProps} />
    </StPostContainer>
  );
};
