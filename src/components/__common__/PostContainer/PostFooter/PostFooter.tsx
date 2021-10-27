import React from 'react';
import { ROLES } from '@constants/roles';
import { IUseTheme } from '@common/types/commonTypes';
import moment from 'moment';
import { useLocation } from 'react-router';
import { APP_ROUTES } from '@constants/appRoutes';
import Comments from '@src/components/Comments';
import Likes from '@src/components/Likes';
import { StPostDate, StPostDateText, StPostFooter } from '../styled';
import PendingButtons from '../PendingButtons';

interface IProps {
  id: string;
  theme: Omit<IUseTheme, 'changeTheme'>;
  createdAt: number;
  userRole: string;
  likes: string[];
}

export const PostFooter: React.FC<IProps> = ({ id, theme, createdAt, userRole, likes }) => {
  const prettyDate = moment(createdAt).format('DD MM YYYY hh:mm:ss');
  const { pathname } = useLocation();
  return (
    <StPostFooter>
      <StPostDate>
        <StPostDateText {...theme}>
          {prettyDate}
        </StPostDateText>
      </StPostDate>
      {pathname !== APP_ROUTES.PRIVATE && <Likes id={id} likes={likes}/>}
      {pathname !== APP_ROUTES.PRIVATE ? <Comments /> : null}
      {userRole !== ROLES.USER && pathname === APP_ROUTES.PENDING
        ? <PendingButtons id={id} />
        : null}
    </StPostFooter>
  );
};
