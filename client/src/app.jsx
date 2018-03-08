import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header.jsx';
import Routes from './Routes.jsx';
import HomePage from './components/HomePage.jsx';
import Resume from './components/Resume.jsx';
import LoginPage from './containers/LoginPage.jsx';
import TodoPage from './containers/TodoPage.jsx';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


//MUI depends on react-tap-event-plugin, if you don't user MUI, add <meta name="viewport" content="width=device-width"> will remove the 300ms delay
injectTapEventPlugin();

ReactDom.render((
            <HashRouter>
                <div>
                    <Header />
                    <Route exact path="/" component={HomePage} />
                    <Route path="/profile" component={Resume} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/todo" component={TodoPage} />
                </div>
            </HashRouter>
), document.getElementById('main')
);
