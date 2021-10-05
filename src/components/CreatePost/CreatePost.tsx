import React from 'react';
import ModalWrapper from '../__common__/ModalWrapper';
import { StFlex } from '../__common__/styled/Blocs';
import ChangePostTheme from './ChangePostTheme';
import CreatePostButtons from './CreatePostButtons';
import PostInput from './PostInput';

export const CreatePost: React.FC = () => {
  return (
    <ModalWrapper headerKey="create_post_modal_header">
      <StFlex
        flexDirection="column"
      >
        <ChangePostTheme />
        <PostInput />
        <CreatePostButtons />
      </StFlex>
    </ModalWrapper >
  );
};
