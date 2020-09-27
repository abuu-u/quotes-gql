import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  box-sizing: border-box;
  padding: 10px 20px;

  background-color: #adadcc;

  button {
    display: block;
    margin-left: auto;
    border: 0;
    padding: 10px 20px;
    border-radius: 2em;
    font-size: 18px;
  }

  @media (min-width: 768px) {
    padding: 20px 100px;
    width: auto;
  }
`;

const Header = ({ authorized, onLogout }) => (
  <HeaderStyled>
    <button type="button" onClick={onLogout}>
      {authorized ? 'Logout' : 'Login'}
    </button>
  </HeaderStyled>
);

Header.propTypes = {
  authorized: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default Header;
