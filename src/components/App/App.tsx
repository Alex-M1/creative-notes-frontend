import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { Route } from 'react-router';
import { APP_ROUTES } from '@constants/appRoutes';
import { AuthPages } from '@constants/auth';
import { ToastContainer } from 'react-toastify';
import { getInitStatus } from '@store/user/selectors';
import { useSelector } from 'react-redux';
import withUserControl from '../hoc/UserControl';
import { StGlobalStyle, StAbsoluteWrapper } from './styled';
import AuthPage from '../AuthPage';
import Header from '../Header';
import MainPage from '../MainPage';
import CreatePost from '../CreatePost';
import { useTheme, withTheme } from '../hoc/withTheme';

const App: React.FC = () => {
  const initStatus = useSelector(getInitStatus);
  const themeProps = useTheme();
  return (
    <>
      <Header />
      <Route path={APP_ROUTES.REGISTRATION} exact>
        <AuthPage page={AuthPages.registration} />
      </Route>
      <Route path={APP_ROUTES.LOGIN} exact>
        <AuthPage page={AuthPages.auth} />
      </Route>
      <Route path={APP_ROUTES.MAIN} exact>
        <MainPage />
      </Route>
      <ToastContainer />
      {initStatus && (
        <StAbsoluteWrapper
          position="absolute"
          bottom="5%"
          right="5%"
        >
          <CreatePost />
        </StAbsoluteWrapper>
      )}
      <StGlobalStyle {...themeProps}/>
    </>
  );
};

export default withUserControl(withTheme(App));
