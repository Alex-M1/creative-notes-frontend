import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { Route } from 'react-router';
import { APP_ROUTES } from '@constants/appRoutes';
import { AuthPages } from '@constants/auth';
import { ToastContainer } from 'react-toastify';
import withUserControl from '../hoc/UserControl';
import { StGlobalStyle } from './styled';
import AuthPage from '../AuthPage';
import Header from '../Header';
import MainPage from '../MainPage';

const App: React.FC = () => {
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
      <StGlobalStyle />
    </>
  );
};

export default withUserControl(App);
