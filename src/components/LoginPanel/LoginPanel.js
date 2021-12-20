// ./src/components/LoginPanel.js
import React, { useState } from "react";
import styled, { css } from "styled-components";

import { StyledField } from "../Field/Field.styled";

const LoginPanel = (props) => {
  const { text, setIsLoggedIn } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isSubmited, setIsSubmited] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const err = [];

    if (!email.includes("@")) {
      err.push("* Niepawidłowy adres email!");
    }

    if (password.length < 6) {
      err.push("* Hasło jest za krótkie!");
    }

    if (err.length > 0) {
      alert("Logowanie nie powiodło się!");
    } else {
      alert("Witaj, zostałeś prawidłowo zalogowany!");

      setEmail("");
      setPassword("");
      setIsLoggedIn(true);
    }

    setErrors(err);
    setIsSubmited(true);
  };

  return (
    <Container>
      <StyledLoginPanel
        isSubmited={isSubmited}
        isValid={isSubmited && errors.length === 0}
      >
        <Title>{text}</Title>
        <form noValidate onSubmit={handleSubmit}>
          <Row>
            <Label fieldName="email">Email</Label>
            <StyledField
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Row>
          <Row>
            <Label fieldName="password">Password</Label>
            <StyledField
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Row>
          <RowWithButton>
            <Submit />
          </RowWithButton>
        </form>
      </StyledLoginPanel>
      <ErrorBox>
        {errors.length > 0 ? <p>{errors.join("\n")}</p> : null}
      </ErrorBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledLoginPanel = styled.section`
  background-color: #ffffff;
  border: 1px solid #e9eaed;
  padding: 20px;
  margin: 20px;
  min-width: 350px;
`;

const Title = styled.h3`
  text-align: center;
  color: #0087ff;
  margin-bottom: 20px;
  font-size: 22px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
`;

const RowWithButton = styled(Row)`
  justify-content: center;
  margin-top: 20px;
`;

const Label = styled.label.attrs((props) => ({
  htmlFor: `field-${props.fieldName}`,
}))`
  color: #0087ff;
  letter-spacing: 1px;
  width: 100px;
  height: 30px;
  border-radius: 8px;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  box-shadow: 5px 5px 6px #cccccc, -5px -5px 6px #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 5px 0;
`;

const Submit = styled.input.attrs(() => ({
  type: "submit",
  value: "Log in",
}))`
  font-size: 16px;
  letter-spacing: 1px;
  color: #0087ff;
  font-weight: bold;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 12px;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  box-shadow: 5px 5px 6px #cccccc, -5px -5px 6px #ffffff;
  width: 120px;
  height: 60px;
  border: none;
  margin: 10px;
  &:active {
    border-radius: 10px;
    background: #ffffff;
    box-shadow: inset 5px 5px 8px #c4c4c4, inset -5px -5px 8px #ffffff;
  }
`;

const ErrorBox = styled.section`
  color: red;
  width: 260px;
  font-weight: bold;
`;

export default LoginPanel;
