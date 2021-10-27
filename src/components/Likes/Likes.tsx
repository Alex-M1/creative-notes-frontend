import React, { FC } from 'react';

interface ILikes{
  likes: string[] | [];
  likePost: (id: string) => void
  id: string;
}
const Likes: FC<ILikes> = ({ id, likes, likePost }) => {
  const likeHandler = () => likePost(id);

  return (
    <div>
      <button onClick={likeHandler}>like</button>
      {likes.length}
    </div>
  );
};

export default Likes;
