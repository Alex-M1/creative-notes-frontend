import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { APP_ROUTES } from '@constants/appRoutes';
// import Registration from '../Registration';
import AuthForm from '../AuthForm';
import { StGlobalStyle } from './styled';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={APP_ROUTES.REGISTRATION} exact component={AuthForm} />
      </Switch>
      <StGlobalStyle />
    </BrowserRouter>
  );
};

export default App;
