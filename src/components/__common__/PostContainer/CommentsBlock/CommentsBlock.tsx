import React from 'react';
import { StFlex } from '@common/styled/Blocs';
import Image from '@common/Image';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '@constants/appRoutes';

interface IProps {
  id: string;
  quantity: number;
}

export const CommentsBlock: React.FC<IProps> = ({ id, quantity }) => {
  return (
    <Link to={`${APP_ROUTES.COMMENT}/${id}`}>
      <StFlex cursorPointer ai="center">
        <Image icon="comment.png" width="24px" margin='0 10px 0' />
        {quantity > 0 ? quantity : null}
        <StFlex margin="0 0 0 3px"> comments</StFlex>
      </StFlex>
    </Link>
  );
};
