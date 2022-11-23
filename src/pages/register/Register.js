import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const RegisterContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const RegisterForm = styled.form`
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
function Register() {
  return (
    <RegisterContainer>
      <RegisterForm>
        <label htmlFor="email-register-input">Email:</label>
        <InputStyled
          id="email-register-input"
          placeholder="Enter a valid email"
        />
        <label htmlFor="username-register-input">username:</label>
        <InputStyled
          id="username-register-input"
          placeholder="Enter username"
        />
        <label htmlFor="password-register-input">password:</label>
        <InputStyled
          id="password-register-input"
          placeholder="Enter password"
        />
        <ButtonStyled>register</ButtonStyled>
      </RegisterForm>
      <LinkContainer>
        <span>Allready have an account?</span>
        <NavLinker to="/login">Login User!</NavLinker>
      </LinkContainer>
    </RegisterContainer>
  );
}

export default Register;
