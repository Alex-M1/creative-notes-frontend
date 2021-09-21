import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { APP_ROUTES } from 'constants/appRoutes';
import Registration from '../Registration';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={APP_ROUTES.REGISTRATION} exact component={Registration} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
