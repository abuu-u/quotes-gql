import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { AppRoute } from '../const';

const PrivateRoute = ({
  render, path, exact, authorized,
}) => (
  <Route
    path={path}
    exact={exact}
    render={({ match }) => (authorized ? render(match) : <Redirect to={AppRoute.LOGIN} />)}
  />
);

PrivateRoute.propTypes = {
  authorized: PropTypes.bool.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
