import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {APP_ROUTES} from '@constants/appRoutes';
import {AuthPages} from '@constants/auth';
import {StGlobalStyle} from './styled';
import AuthPage from '../AuthPage';
import Header from '../Header';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path={APP_ROUTES.REGISTRATION} exact>
                    <AuthPage page={AuthPages.registration}/>
                </Route>
                <Route path={APP_ROUTES.LOGIN} exact>
                    <AuthPage page={AuthPages.auth}/>
                </Route>
            </Switch>
            <StGlobalStyle/>
        </BrowserRouter>
    );
};

export default App;
