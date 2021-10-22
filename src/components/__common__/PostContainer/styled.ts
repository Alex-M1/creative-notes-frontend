import styled from 'styled-components';
import { ITheme } from '../styled/types';

export const StPostContainer = styled.div<ITheme>`
  margin-bottom: 30px;
  min-height: 150px;
  border-radius: 15px;
  border: 4px solid ${({ colors, theme }) => colors[theme].publicPostBorder};
  color: ${({ colors, theme }) => colors[theme].publicPostText};
  background-color: ${({ colors, theme }) => colors[theme].postWrapperColor}
`;

export const StPostHeader = styled.div<ITheme>`
  width: 100%;
  padding-top: 45px;
  min-height: 50px;
  border-bottom: 4px solid ${({ colors, theme }) => colors[theme].publicPostBorder};
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StPostFooter = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
`;

export const StPostTheme = styled.span`
  min-width: 130px;
  display: grid;
  grid-template: 1fr / 40% 60%;
  align-items: center;
  padding-left: 15px;
`;

export const StPostThemeName = styled.p<ITheme>`
  color: ${({ colors, theme }) => colors[theme].publicPostRubric};
  font-size: 10px;
`;

export const StPostContent = styled.div`
  min-height: 65%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  word-break: break-word;
`;

export const StPostContentText = styled.p`
  width: 90vw;
  text-align: left;
  hyphens: auto;
`;

export const StPostDate = styled.div`
  width: 100%;
  padding-left: 15px;
`;

export const StPostDateText = styled.div<ITheme>`
  color: ${({ colors, theme }) => colors[theme].publicPostRubric};
  font-size: 12px;
`;

export const StPostButtons = styled.div`
  width: 60%;
  height: 50px;
  margin-right: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StPostAuthor = styled.div`
  min-width: 250px; 
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const StPostAuthorName = styled.p<ITheme>`
  font-size: 10px;
  padding: 0 15px;
`;

export const StPostAuthorText = styled.p<ITheme>`
  width: 100%;
  text-align: left;
   padding: 0 15px;
`;

export const StPostAuthorImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

export const StPostDeleteBtn = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;
