import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { useTheme } from '@hoc/withTheme';
import { IPrivatePostProps } from './types';

import {
  PrivatePostDate,
  PrivatePostTheme,
  PrivatePostHeader,
  PrivatePostWrapper,
  PrivatePostFooter,
  PrivatePostContent,
  PrivatePostDateText,
  PrivatePostThemeName,
  PrivatePostThemeText,
  PrivatePostContentText,
} from './styled';

const PrivatePost: FC<IPrivatePostProps> = (
  {
    theme: postTheme,
    content,
    created_at,
  }) => {
  const themeProps = useTheme();
  const { t } = useTranslation();
  const prettyDate = moment(created_at).format('DD MM YYYY hh:mm:ss');
  
  return (

    <PrivatePostWrapper {...themeProps}>
      <PrivatePostHeader {...themeProps}>
        <PrivatePostTheme>
          <PrivatePostThemeName
            {...themeProps}
          >
            {t('theme')}
          </PrivatePostThemeName>
          <PrivatePostThemeText
            {...themeProps}
          >
            {t(postTheme)}
          </PrivatePostThemeText>
        </PrivatePostTheme>
      </PrivatePostHeader>
      <PrivatePostContent>
        <PrivatePostContentText>
          {content}
        </PrivatePostContentText>
      </PrivatePostContent>
      <PrivatePostFooter>
        <PrivatePostDate>
          <PrivatePostDateText
            {...themeProps}
          >
            {prettyDate}
          </PrivatePostDateText>
        </PrivatePostDate>
      </PrivatePostFooter>
    </PrivatePostWrapper>
  );
};

export default PrivatePost;
