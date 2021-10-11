import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { useTheme } from '@hoc/withTheme';
import Button from '@common/Button';
import { ROLES } from '@constants/roles';
import { useDispatch } from 'react-redux';
import { rejectPendingPost, resolvePendingPost } from '@store/user/actions';
import { IPendingPostProps } from './types';

import {
  PendingPostDate,
  PendingPostTheme,
  PendingPostHeader,
  PendingPostWrapper,
  PendingPostFooter,
  PendingPostContent,
  PendingPostDateText,
  PendingPostThemeName,
  PendingPostThemeText,
  PendingPostContentText,
  PendingPostAuthor,
  PendingPostAuthorImg,
  PendingPostAuthorName,
  PendingPostAuthorText,
  PendingPostResolveReject,
} from './styled';

const PendingPost: FC<IPendingPostProps> = (
  {
    currentUserRole,
    _id,
    img,
    author,
    theme: postTheme,
    content,
    created_at,
  }) => {
  const dispatch = useDispatch();
  const themeProps = useTheme();
  const { t } = useTranslation();
  const prettyDate = moment(created_at).format('DD MM YYYY hh:mm:ss');
  const handleReject = () => dispatch(rejectPendingPost(_id));
  const handleResolve = () => dispatch(resolvePendingPost(_id));

  return (

    <PendingPostWrapper {...themeProps}>
      <PendingPostHeader {...themeProps}>
        <PendingPostTheme>
          <PendingPostThemeName
            {...themeProps}
          >
            {t('theme')}
          </PendingPostThemeName>
          <PendingPostThemeText
            {...themeProps}
          >
            {t(postTheme)}
          </PendingPostThemeText>
        </PendingPostTheme>
        <PendingPostAuthor>
          <PendingPostAuthorName {...themeProps}>{t('author')}</PendingPostAuthorName>
          <PendingPostAuthorImg src={img || 'assets/img/defaultAvatar.png'} />
          <PendingPostAuthorText {...themeProps}>{author.login}</PendingPostAuthorText>
        </PendingPostAuthor>
      </PendingPostHeader>
      <PendingPostContent>
        <PendingPostContentText>
          {content}
        </PendingPostContentText>
      </PendingPostContent>
      <PendingPostFooter>
        <PendingPostDate>
          <PendingPostDateText
            {...themeProps}
          >
            {prettyDate}
          </PendingPostDateText>
        </PendingPostDate>
        {currentUserRole !== ROLES.USER && (
          <PendingPostResolveReject>
            <Button
              translateKey="reject"
              onClick={handleReject}
            />
            <Button
              translateKey="resolve"
              onClick={handleResolve}
            />
          </PendingPostResolveReject>
        )}
      </PendingPostFooter>
    </PendingPostWrapper>
  );
};

export default PendingPost;
