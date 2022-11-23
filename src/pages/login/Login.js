import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const LoginContainer = styled.div`
  height: 100%;
  width: 100%;
`;
const LoginForm = styled.form`
  height: 300px;
  width: 250px;
  margin: 100px auto 0 auto;
  border: 1px solid blue;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;
const InputStyled = styled.input`
  margin: 5px 0 15px 0;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

const NavLinker = styled(NavLink)`
  margin: 0 0 0 10px;
`;

const ButtonStyled = styled.button``;
function Login() {
  return (
    <LoginContainer>
      <LoginForm>
        <label htmlFor="username-login-input">username:</label>
        <InputStyled id="username-login-input" placeholder="Enter username" />
        <label htmlFor="password-login-input">password:</label>
        <InputStyled id="password-login-input" placeholder="Enter password" />
        <ButtonStyled>Login</ButtonStyled>
      </LoginForm>
      <LinkContainer>
        <span>New user?</span>
        <NavLinker to="/register">Register User!</NavLinker>
      </LinkContainer>
    </LoginContainer>
  );
}

export default Login;
