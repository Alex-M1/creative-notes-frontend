import React from 'react';
import ModalWrapper from '../__common__/ModalWrapper';
import { StFlex } from '../__common__/styled/Blocs';
import ChangePostTheme from './ChangePostTheme';
// import PostInput from './PostInput';

export const CreatePost: React.FC = () => {
  return (
    <ModalWrapper>
      <StFlex
        // background='red'
        border="3px solid #fff"
        borderRadius="7px"
        flexDirection="column"
      >
        <ChangePostTheme />
        {/* <PostInput /> */}
      </StFlex>
    </ModalWrapper >
  );
};
