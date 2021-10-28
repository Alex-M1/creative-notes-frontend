import React, { FC } from 'react';
import Image from '@common/Image';
import { LikesWrapper, LikeCount, LikeImageWrapper } from './styled';

interface ILikes{
  likes: string[] | [];
  likePost: (id: string) => void
  id: string;
  userLogin: string;
}
const Likes: FC<ILikes> = ({ id, likes, likePost, userLogin }) => {
  const isLiked = likes.some(like => like === userLogin);
  const likeHandler = () => {
    if (!isLiked) likePost(id);
  };

  return (
    <LikesWrapper>
      <LikeImageWrapper isNoliked={!isLiked}>
        <Image
          width="100%"
          height="100%" 
          onClick={likeHandler}
          icon={isLiked ? 'like.png' : 'nolike.png'}
        />
      </LikeImageWrapper>
      <LikeCount>{likes.length}</LikeCount>
    </LikesWrapper>
  );
};

export default Likes;
