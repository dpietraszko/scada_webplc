import React from "react";
import styled, { css } from "styled-components";

import { StyledButton } from "./Button.styled";

const Button = (props) => {
  const { text, onClick } = props;

  return (
    <Row>
      <StyledButton onClick={onClick}>{text}</StyledButton>
    </Row>
  );
};

const Row = styled.div`
  margin-left: 50px;
`;

export default Button;
