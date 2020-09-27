import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Quotes from './quotes';

const Main = ({ authorized, onLogout }) => (
  <>
    <Header authorized={authorized} onLogout={onLogout} />
    <Quotes />
  </>
);

Main.propTypes = {
  authorized: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default Main;
