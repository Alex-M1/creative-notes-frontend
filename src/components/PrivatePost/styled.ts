import styled from 'styled-components';
import { ITheme } from '@common/styled/types';

export const PrivatePostWrapper = styled.div<ITheme>`
  margin-top: 30px;
  min-height: 150px;
  border-radius: 15px;
  border: 4px solid ${({ colors, theme }) => colors[theme].publicPostBorder};
  color: ${({ colors, theme }) => colors[theme].publicPostText};
  background-color: ${({ colors, theme }) => colors[theme].postWrapperColor}
`;

export const PrivatePostHeader = styled.div<ITheme>`
  width: 100%;
  padding-top: 45px;
  min-height: 50px;
  border-bottom: 4px solid ${({ colors, theme }) => colors[theme].publicPostBorder};
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PrivatePostTheme = styled.span`
  min-width: 130px;
  display: grid;
  grid-template: 1fr / 40% 60%;
  align-items: center;
  padding-left: 15px;
`;

export const PrivatePostThemeName = styled.p<ITheme>`
  color: ${({ colors, theme }) => colors[theme].publicPostRubric};
  font-size: 10px;
`;

export const PrivatePostThemeText = styled.p<ITheme>`
`;

export const PrivatePostAuthor = styled.div`
  min-width: 250px; 
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const PrivatePostAuthorName = styled.p<ITheme>`
  font-size: 10px;
  padding: 0 15px;
`;

export const PrivatePostAuthorText = styled.p<ITheme>`
  width: 100%;
  text-align: left;
   padding: 0 15px;
`;

export const PrivatePostAuthorImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

export const PrivatePostContent = styled.div`
  min-height: 65%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  word-break: break-word;
`;

export const PrivatePostContentText = styled.p`
  width: 90vw;
  text-align: left;
  hyphens: auto;
`;

export const PrivatePostDeleteBtn = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export const PrivatePostFooter = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
`;

export const PrivatePostDate = styled.div`
  width: 100%;
  padding-left: 15px;
`;

export const PrivatePostDateText = styled.div<ITheme>`
  color: ${({ colors, theme }) => colors[theme].publicPostRubric};
  font-size: 12px;
`;
