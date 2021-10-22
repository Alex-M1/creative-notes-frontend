import Select from '@common/Select';
import { APP_ROUTES } from '@constants/appRoutes';
import { FILTER_THEME_OPTIONS } from '@constants/posts';
import { WS_EVENTS } from '@constants/wsEvents';
import { StFlex } from '@src/components/__common__/styled/Blocs';
import { chooseWSEventByRoute } from '@src/helpers/postsHelper';
import { TThemes } from '@store/posts/types';
import React from 'react';
import { useLocation } from 'react-router';

interface IProps {
  value: TThemes
  emitAction: (payload: WS_EVENTS) => void
  changeFilterTheme: (payload: TThemes) => void
}

export const PostThemeFilter: React.FC<IProps> = ({ value, changeFilterTheme, emitAction }) => {
  const { pathname } = useLocation();
  const onChange = (value: TThemes) => {
    changeFilterTheme(value);
    emitAction(chooseWSEventByRoute(pathname as APP_ROUTES));
  };
  return (
    <StFlex width="100%" jc="flex-start">
      <Select
        value={value}
        options={FILTER_THEME_OPTIONS}
        onChange={onChange}
      />
    </StFlex>
  );
};
