import React from "react";
import styled, { css, keyframes } from "styled-components";

const ProgressBar = (props) => {
  const { value } = props;

  return (
    <Row>
      <Bar value={parseInt(value)}>{parseInt(value)}%</Bar>
    </Row>
  );
};

const Row = styled.div`
  background: #ffffff;
  box-shadow: inset 5px 5px 8px #c4c4c4, inset -5px -5px 8px #ffffff;
  justify-content: flex-start;
  border-radius: 100px;
  align-items: center;
  position: relative;
  padding: 0 5px;
  display: flex;
  height: 40px;
  width: 300px;
  margin: 20px 0 20px 0;
`;

const load = (value) => {
  return keyframes`
  0% { width: 0; opacity: 0.6; }
  100% { width: ${value}%; opacity: 1; }
`;
};

const Bar = styled.div`
  animation: ${(props) => load(props.value)} 1s normal forwards;
  box-shadow: 0 10px 40px -10px #fff;
  border-radius: 100px;
  background: linear-gradient(0.25turn, #ffffff, #ebecf0, #0087ff);
  height: 30px;
  width: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  font-weight: bold;
  color: #0087ff;
`;

export default ProgressBar;
