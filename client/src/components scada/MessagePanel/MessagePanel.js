import React from "react";
import styled, { css, keyframes } from "styled-components";

const MessagePanel = (props) => {
  const { text } = props;

  return (
    <Content>
      <Message>{text}</Message>
    </Content>
  );
};

const Content = styled.div`
  text-align: center;
  color: #000000;
  width: 298px;
  padding: 8px;
  position: relative;
  top: 12px;
  border-radius: 8px;
  border: 5px solid #595959;
  background-color: #ffffff;
`;

const Message = styled.span`
  color: #ff5d00;
  font-size: 21px;
  font-weight: bold;
  font-family: "Copperplate Gothic Light";
  letter-spacing: 2px;
`;

export default MessagePanel;
