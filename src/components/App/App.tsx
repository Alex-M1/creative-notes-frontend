import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { Route } from 'react-router';
import { APP_ROUTES } from '@constants/appRoutes';
import { AuthPages } from '@constants/auth';
import { ToastContainer } from 'react-toastify';
import { getInitStatus } from '@store/user/selectors';
import { useSelector } from 'react-redux';
import { useTheme, withTheme } from '@hoc/withTheme';
import withUserControl from '@hoc/UserControl';
import { StGlobalStyle, StAbsoluteWrapper } from './styled';
import AuthPage from '../AuthPage';
import Header from '../Header';
import CreatePost from '../Jaw/CreatePost';
import PersonalArea from '../PersonalArea';
import PrivatePage from '../PrivatePage';
import PendingPage from '../PendingPage';
import PublicPage from '../PublicPage';

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
      <ToastContainer />
      {/* {initStatus && (
        <StAbsoluteWrapper
          position="absolute"
          bottom="5%"
          right="5%"
        >
       
        </StAbsoluteWrapper>
      )} */}
      <StGlobalStyle {...themeProps} />
    </>
  );
};

export default withUserControl(withTheme(App));
