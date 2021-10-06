import styled from 'styled-components';
import { ITheme } from '@common/styled/types';

export const PublicPostWrapper = styled.div<ITheme>`
  margin-top: 30px;
  min-height: 150px;
  border-radius: 15px;
  border: 4px solid ${({ colors, theme }) => colors[theme].publicPostBorder};
  color: ${({ colors, theme }) => colors[theme].publicPostText};
  background-color: rgba(0, 0, 0, 0.9);
`;

export const PublicPostHeader = styled.div<ITheme>`
  width: 100%;
  padding-top: 45px;
  min-height: 50px;
  border-bottom: 4px solid ${({ colors, theme }) => colors[theme].publicPostBorder};
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PublicPostTheme = styled.span`
  min-width: 130px;
  display: grid;
  grid-template: 1fr / 40% 60%;
  align-items: center;
  padding-left: 15px;
`;

export const PublicPostThemeName = styled.p<ITheme>`
  color: ${({ colors, theme }) => colors[theme].publicPostRubric};
  font-size: 10px;
`;

export const PublicPostThemeText = styled.p<ITheme>`
`;

export const PublicPostAuthor = styled.div`
  min-width: 250px; 
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const PublicPostAuthorName = styled.p<ITheme>`
  font-size: 10px;
  padding: 0 15px;
`;

export const PublicPostAuthorText = styled.p<ITheme>`
  width: 100%;
  text-align: left;
   padding: 0 15px;
`;

export const PublicPostAuthorImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

export const PublicPostContent = styled.div`
  min-height: 65%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  word-break: break-word;
`;

export const PublicPostContentText = styled.p`
  width: 90vw;
  text-align: left;
  hyphens: auto;
`;

export const PublicPostDeleteBtn = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export const PublicPostFooter = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`;

export const PublicPostDate = styled.div`
  width: 50%;
  display: grid;
  align-items: center;
  padding-left: 15px;
`;

export const PublicPostDateText = styled.div<ITheme>`
  color: ${({ colors, theme }) => colors[theme].publicPostRubric};
  font-size: 12px;
`;

export const PublicPostLikes = styled.div`
  width: 80px;
  padding-bottom: 5px;
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  align-items: center;
  cursor: pointer;
`;

export const PublicPostLike = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

export const PublicPostLikesCount = styled.span<ITheme>`
  color: ${({ colors, theme }) => colors[theme].color};
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;
