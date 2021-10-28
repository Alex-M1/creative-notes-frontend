import React from 'react';
import ModalWrapper from '../../__common__/ModalWrapper';
import { StFlex } from '../../__common__/styled/Blocs';
import ChangePostTheme from './ChangePostTheme';
import CreatePostButtons from './CreatePostButtons';
import ChangeAnonymous from './ChangeAnonymous';
import PostInput from './PostInput';

export const CreatePost: React.FC = () => {
  return (
    <ModalWrapper triggerKey="create_post_modal_header" headerKey="create_post_modal_header">
      {
        (onClose) => (
          <StFlex
            flexDirection="column"
          >
            <StFlex
              justifyContent="space-between"
              ai="flex-start"
            >
              <ChangeAnonymous/>
              <ChangePostTheme />
            </StFlex>
            <PostInput />
            <CreatePostButtons onClose={onClose} />
          </StFlex>
        )
      }
    </ModalWrapper >
  );
};
