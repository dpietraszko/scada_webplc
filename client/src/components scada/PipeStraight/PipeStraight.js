import React from "react";
import styled, { css, keyframes } from "styled-components";

const PipeStraight = (props) => {
  const { value, valueLenght, valueMoveBottom, valueColorGradient } = props;

  return (
    <Content moveBottom={valueMoveBottom}>
      <Nut></Nut>
      <Pipe length={valueLenght}>
        <Bar value={parseInt(value)} colorGradient={valueColorGradient}></Bar>
      </Pipe>
      <Nut></Nut>
    </Content>
  );
};

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  bottom: ${(props) => props.moveBottom}px;
`;

const Pipe = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: linear-gradient(
    to right,
    #777777,
    #eae8e8,
    #c4c4c4,
    #ffffff,
    #c4c4c4,
    #eae8e8,
    #777777
  );
  box-shadow: inset 5px 5px 8px #c4c4c4, inset -5px -5px 8px #c4c4c4;
  height: ${(props) => props.length}px;
  width: 40px;
`;

const load = (value) => {
  return keyframes`
  0% { height: 0; opacity: 0.6; }
  100% { height: ${value}%; opacity: 1; }
`;
};

const Bar = styled.div`
  animation: ${(props) => load(props.value)} 1s normal forwards;
  box-shadow: 0 10px 40px -10px #fff;
  border-radius: 5px;
  background: linear-gradient(
    0.25turn,
    #51abff,
    ${(props) => props.colorGradient}
  );
  height: 50px;
  width: 5px;
`;

const Nut = styled.div`
  background: linear-gradient(
    to right,
    #777777,
    #eae8e8,
    #c4c4c4,
    #ffffff,
    #c4c4c4,
    #eae8e8,
    #777777
  );
  box-shadow: inset 5px 5px 8px #c4c4c4, inset -5px -5px 8px #c4c4c4;
  border-radius: 4px;
  position: relative;
  height: 15px;
  width: 52px;
`;

export default PipeStraight;
