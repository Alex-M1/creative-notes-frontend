import React from 'react';
import { useTheme } from '@hoc/withTheme';
import { StJawWrapper } from './styled';
import CreatePost from './CreatePost';
import PostThemeFilter from './PostThemeFilter';
import PostLinks from './PostLinks';

const Jaw: React.FC = () => {
  const themeProps = useTheme();
  return (
    <StJawWrapper {...themeProps}>
      <PostThemeFilter />
      <PostLinks />
      <CreatePost />
    </StJawWrapper>
  );
};

export default Jaw;
