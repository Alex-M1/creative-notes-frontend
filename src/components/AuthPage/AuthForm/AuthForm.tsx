import React from 'react';
import { push } from 'react-router-redux';
import { Title } from '@src/components/__common__';
import { StFlex } from '@common/styled/Blocs';
import { TAuthPages } from '@src/components/__common__/types/authTypes';
import { setAuthPageProps } from '@src/helpers/authHelpers';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import AuthInput from './AuthInput';
import AuthButton from './AuthButton';

import { StNavTitle, StNavLink, StNavWrapper } from './styled';

export interface IProps {
  page: TAuthPages;
}

export const AuthForm: React.FC<IProps> = ({ page }) => {
  const dispatch = useDispatch();
  const {
    title, inputKey,
    page: currentPage,
    pathToRedirect,
    spanRedirectText,
    linkRedirectText,
  } = setAuthPageProps(page);
  const { t } = useTranslation();
  const handleRedirectLink = () => dispatch(push(pathToRedirect));

  return (
    <StFlex
      ai="center"
      flexDirection="column"
      justifyContent="space-evenly"
      height="80vh"
    >
      <Title translateKey={title}/>
      {
        Object.values(inputKey).map(type => ( 
          <AuthInput key={type} type={type}/>
        ))
      }
      <AuthButton currentPage={currentPage} translateKey={`${title}_btn`} />
      <StFlex
        ai="center"
        justifyContent="space-evenly"
      >
        <StNavTitle>{t(spanRedirectText)}</StNavTitle>
        <StNavLink onClick={handleRedirectLink}>{t(linkRedirectText)}</StNavLink>
      </StFlex>
    </StFlex>
  );
};
