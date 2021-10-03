import styled from 'styled-components';
import { DEFAULT_COLORS } from '@constants/colors';

export const PublicPostWrapper = styled.div`
  margin-top: 30px;
  min-height: 150px;
  border-radius: 15px;
  height: 150px;
  border: 4px solid ${DEFAULT_COLORS.lightGrey};
  color: ${DEFAULT_COLORS.white};
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const PublicPostHeader = styled.div`
  width: 100%;
  min-height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PublicPostTheme = styled.span`
  width: 130px;
  display: grid;
  grid-template: 1fr / 40% 60%;
  align-items: center;
  margin-left: 5px;
`;

export const PublicPostThemeName = styled.p`
  color: ${DEFAULT_COLORS.darkGrey};
  font-size: 10px;
`;

export const PublicPostThemeText = styled.p`
  color: ${DEFAULT_COLORS.white};
`;

export const PublicPostAuthor = styled.div`
  min-width: 200px;
  display: grid;
  grid-template: 1fr / 25% 25% 25% 25%;
  align-items: center;
  position: relative;
`;

export const PublicPostAuthorName = styled.p`
  color: ${DEFAULT_COLORS.darkGrey};
  font-size: 10px;
`;

export const PublicPostAuthorText = styled.p`
  color: ${DEFAULT_COLORS.white};
`;

export const PublicPostAuthorImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

export const PublicPostContent = styled.span`
  border: 1px solid black;
  min-height: 65%;
`;

export const PublicPostDeleteBtn = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const PublicPostFooter = styled.div`
  height: 15%;
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
  margin-left: 5px;
`;

export const PublicPostDateText = styled.div`
  color: ${DEFAULT_COLORS.blue};
  font-size: 12px;
`;

export const PublicPostLikes = styled.div`
  width: 80px;
  padding-bottom: 5px;
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  align-items: center;
`;

export const PublicPostLike = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

export const PublicPostLikesCount = styled.span`
  color: ${DEFAULT_COLORS.white};
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;
