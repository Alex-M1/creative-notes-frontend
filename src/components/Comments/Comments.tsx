import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router';
import { IMatchParams } from '@common/types/commonTypes';
import { IComment, IGetCommentsRequest } from '@store/comments/types';
import { StFlex } from '@common/styled/Blocs';
import CommentItem from './CommentItem';
import CreateComment from './CreateComment';
import { MainPageWrapper } from '../MainPage/styled';
import Jaw from '../Jaw';
import { StCommentsWrapper } from './styled';

interface IProps {
  comments: Array<IComment>;
  leaveRoom: (payload: string) => void;
  getComments: (payload: IGetCommentsRequest) => void;
}

export const Comments: React.FC<IProps> = ({ comments, leaveRoom, getComments }) => {
  const { params } = useRouteMatch<IMatchParams>();
  useEffect(() => {
    getComments({ postId: params.postId, isJoinRoom: true });
    return () => leaveRoom(params.postId);
  }, []);
  return (
    <MainPageWrapper >
      <Jaw />
      <StFlex flexDirection="column">
        <StCommentsWrapper>
          {comments?.map(comment => <CommentItem key={comment._id} {...comment} />)}
        </StCommentsWrapper>
        <CreateComment postId={params.postId} />
      </StFlex>
    </MainPageWrapper>
  );
};
