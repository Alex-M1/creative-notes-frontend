import { IPostAuthor } from '@store/posts/types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { IUseTheme } from '@common/types/commonTypes';
import PostAuthor from '../PostAuthor';
import { StPostHeader, StPostTheme, StPostThemeName } from '../styled';

interface IProps {
  author: IPostAuthor;
  theme: Omit<IUseTheme, 'changeTheme'>;
  userRole: string;
  postTheme: string;
  isAnonim: boolean;
}

export const PostHeader: React.FC<IProps> = ({ author, userRole, theme, postTheme, isAnonim }) => {
  const { t } = useTranslation();
  return (
    <StPostHeader {...theme}>
      <StPostTheme>
        <StPostThemeName {...theme}>
          {t('theme')}
        </StPostThemeName>
        <span >{t(postTheme)}</span>
      </StPostTheme>
      <PostAuthor theme={theme} author={author} userRole={userRole} isAnonim={isAnonim}/>
    </StPostHeader>
  );
};
