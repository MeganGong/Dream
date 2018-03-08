import React from 'react';
import Route from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import Resume from './components/Resume.jsx';
import LoginPage from './containers/LoginPage.jsx';
import { Switch } from 'react-router';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/profile" component={Resume} />
        <Route path="/login" component={LoginPage} />
    </Switch>
);

export default Routes;