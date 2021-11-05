import { StPostAuthorImg } from '@common/PostContainer/styled';
import { StFlex } from '@common/styled/Blocs';
import { IPostAuthor } from '@store/posts/types';
import moment from 'moment';
import React from 'react';
import { StCommentsContainer } from '../styled';

interface IProps {
  content: string;
  created_at: number;
  author: IPostAuthor;
}

export const CommentItem: React.FC<IProps> = ({ author, content, created_at }) => {
  const prettyDate = moment(created_at).format('DD.MM.YYYY hh:mm');
  return (
    <StCommentsContainer >
      <StFlex
        jc="space-between"
        ai="center"
        marginBottom="15px"
        padding='0 0 10px 0'
        borderBottom="1px solid #fff"
      >
        <StPostAuthorImg src={author.img || 'assets/img/defaultAvatar.png'} />
        <span>{author.login}</span>
        <span>{prettyDate}</span>
      </StFlex>
      <div>
        {content}
      </div>
    </StCommentsContainer>
  );
};
