import React from "react";
import styled, { css, keyframes } from "styled-components";

const PipeAngle = (props) => {
  const { valueMoveBottom, valueMoveRight, valueRotate } = props;

  return (
    <Content
      moveBottom={valueMoveBottom}
      moveRight={valueMoveRight}
      rotate={valueRotate}
    >
      <NutFirst></NutFirst>
      <Circle>
        <Quarter></Quarter>
        <Cut></Cut>
      </Circle>
      <NutSecond></NutSecond>
    </Content>
  );
};

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: rotate(${(props) => props.rotate}deg);
  position: relative;
  bottom: ${(props) => props.moveBottom}px;
  right: ${(props) => props.moveRight}px;
`;

const NutFirst = styled.div`
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
  bottom: 18px;
  height: 15px;
  width: 52px;
  z-index: 1;
`;

const NutSecond = styled.div`
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
  z-index: 1;
  transform: rotate(270deg);
  bottom: 124px;
  left: 66px;
`;

const Circle = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  bottom: 98px;
  left: 60px;
`;

const Quarter = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 160px;
  height: 160px;
  background: radial-gradient(
    Circle,
    #777777,
    #eae8e8,
    #c4c4c4,
    #eae8e8,
    #c4c4c4,
    #eae8e8,
    #777777
  );
  box-shadow: inset 5px 5px 8px #c4c4c4, inset -5px -5px 8px #c4c4c4;
  clip: rect(80px, 80px, 160px, 0px);
`;

const Cut = styled.div`
  position: absolute;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
  background-color: white;
  border-radius: 50%;
  pointer-events: none;
`;

export default PipeAngle;
