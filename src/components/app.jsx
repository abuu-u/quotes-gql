import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';
import history from '../history';
import { AppRoute } from '../const';

import PrivateRoute from './private-route';
import Main from './main';
import Quote from './quote';
import Login from './login';
import client from '../client';

const App = () => {
  const [authorized, setAuthorized] = useState(false);

  const login = () => {
    setAuthorized(true);
    history.push(AppRoute.ROOT);
  };

  const logout = () => {
    setAuthorized(false);
  };

  return (
    <ApolloProvider client={client}>
      <Router history={history}>
        <Switch>
          <PrivateRoute
            exact
            path={AppRoute.ROOT}
            authorized={authorized}
            render={() => (
              <Main
                authorized={authorized}
                onLogout={logout}
              />
            )}
          />
          <Route exact path={AppRoute.LOGIN}>
            <Login authorized={authorized} onLogin={login} onLogout={logout} />
          </Route>
          <Route exact path={AppRoute.QOUTE}>
            <Quote />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

App.propTypes = {};

export default App;
