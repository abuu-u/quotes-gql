import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './header';

const FormStyled = styled.form`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  margin: 0 auto 0 auto;
  width: 300px;

  label,
  input,
  button {
    font-size: 18px;
  }

  label {
    display flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  input,
  button {
    padding: 5px;
    width: 100%;
    box-sizing: border-box;
  }

  input {
    margin-top: 10px;
  }

  @media (min-width: 768px) {
    width: 500px;
  }
`;

const Login = ({ authorized, onLogin, onLogout }) => (
  <>
    <Header authorized={authorized} onLogout={onLogout} />
    <FormStyled>
      <label htmlFor="login">
        Login
        <input name="login" id="login" type="text" />
      </label>

      <label htmlFor="password">
        Password
        <input name="password" id="password" type="text" />
      </label>

      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();
          onLogin();
        }}
      >
        Login
      </button>
    </FormStyled>
  </>
);

Login.propTypes = {
  authorized: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default Login;
