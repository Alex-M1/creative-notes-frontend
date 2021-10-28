import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { Route } from 'react-router';
import { APP_ROUTES, ROUTE_PARAMETERS } from '@constants/appRoutes';
import { AuthPages } from '@constants/auth';
import { ToastContainer } from 'react-toastify';
import { useTheme, withTheme } from '@hoc/withTheme';
import withUserControl from '@hoc/UserControl';
import { StGlobalStyle } from './styled';
import AuthPage from '../AuthPage';
import Header from '../Header';
import PersonalArea from '../PersonalArea';
import PrivatePage from '../PrivatePage';
import PendingPage from '../PendingPage';
import PublicPage from '../PublicPage';
import Comments from '../Comments';

const App: React.FC = () => {
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
        <PublicPage />
      </Route>
      <Route path={APP_ROUTES.PRIVATE} exact>
        <PrivatePage />
      </Route>
      <Route path={APP_ROUTES.PENDING} exact>
        <PendingPage />
      </Route>
      <Route path={APP_ROUTES.PERSONAL_AREA} exact>
        <PersonalArea />
      </Route>
      <Route path={`${APP_ROUTES.COMMENT}/:${ROUTE_PARAMETERS.postId}`}>
        <Comments />
      </Route>
      <ToastContainer />
      <StGlobalStyle {...themeProps} />
    </>
  );
};

export default withUserControl(withTheme(App));
