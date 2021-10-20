import styled from 'styled-components';
import { ITheme } from '@common/styled/types';

export const PendingPostWrapper = styled.div<ITheme>`
  margin-top: 30px;
  min-height: 150px;
  border-radius: 15px;
  border: 4px solid ${({ colors, theme }) => colors[theme].publicPostBorder};
  color: ${({ colors, theme }) => colors[theme].publicPostText};
  background-color: ${({ colors, theme }) => colors[theme].postWrapperColor}
`;

export const PendingPostHeader = styled.div<ITheme>`
  width: 100%;
  padding-top: 45px;
  min-height: 50px;
  border-bottom: 4px solid ${({ colors, theme }) => colors[theme].publicPostBorder};
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PendingPostTheme = styled.span`
  min-width: 130px;
  display: grid;
  grid-template: 1fr / 40% 60%;
  align-items: center;
  padding-left: 15px;
`;

export const PendingPostThemeName = styled.p<ITheme>`
  color: ${({ colors, theme }) => colors[theme].publicPostRubric};
  font-size: 10px;
`;

export const PendingPostThemeText = styled.p<ITheme>`
`;

export const PendingPostAuthor = styled.div`
  min-width: 250px; 
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const PendingPostAuthorName = styled.p<ITheme>`
  font-size: 10px;
  padding: 0 15px;
`;

export const PendingPostAuthorText = styled.p<ITheme>`
  width: 100%;
  text-align: left;
   padding: 0 15px;
`;

export const PendingPostAuthorImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

export const PendingPostContent = styled.div`
  min-height: 65%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  word-break: break-word;
`;

export const PendingPostContentText = styled.p`
  width: 90vw;
  text-align: left;
  hyphens: auto;
`;

export const PendingPostDeleteBtn = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export const PendingPostFooter = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
`;

export const PendingPostDate = styled.div`
  width: 100%;
  padding-left: 15px;
`;

export const PendingPostDateText = styled.div<ITheme>`
  color: ${({ colors, theme }) => colors[theme].publicPostRubric};
  font-size: 12px;
`;

export const PendingPostResolveReject = styled.div`
  width: 60%;
  height: 50px;
  margin-right: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
