import React from 'react';
import { ROLES } from '@constants/roles';
import { IUseTheme } from '@common/types/commonTypes';
import moment from 'moment';
import { useLocation } from 'react-router';
import { APP_ROUTES } from '@constants/appRoutes';
import { StPostDate, StPostDateText, StPostFooter } from '../styled';
import PendingButtons from '../PendingButtons';
import CommentsBlock from '../CommentsBlock';

interface IProps {
  id: string;
  theme: Omit<IUseTheme, 'changeTheme'>;
  createdAt: number;
  userRole: string;
  comments: number;
}

export const PostFooter: React.FC<IProps> = ({ id, theme, createdAt, userRole, comments }) => {
  const prettyDate = moment(createdAt).format('DD MM YYYY hh:mm:ss');
  const { pathname } = useLocation();
  return (
    <StPostFooter>
      <StPostDate>
        <StPostDateText {...theme}>
          {prettyDate}
        </StPostDateText>
      </StPostDate>
      {pathname !== APP_ROUTES.PRIVATE ? <CommentsBlock id={id} quantity={comments} /> : null}
      {userRole !== ROLES.USER && pathname === APP_ROUTES.PENDING
        ? <PendingButtons id={id} />
        : null}
    </StPostFooter>
  );
};
