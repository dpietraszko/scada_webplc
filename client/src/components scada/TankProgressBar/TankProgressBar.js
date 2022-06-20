import React from "react";
import styled, { css, keyframes } from "styled-components";

const TankProgressBar = (props) => {
  const { value, valueColorGradient } = props;

  return (
    <Tank>
      <Row color={valueColorGradient}>
        <progress value={parseInt(value)} max="100" />
        <Level>{parseInt(value)}%</Level>
      </Row>
    </Tank>
  );
};

const Tank = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(
    to right,
    #c4c4c4,
    #eae8e8,
    #c4c4c4,
    #adadad,
    #c4c4c4,
    #eae8e8,
    #c4c4c4
  );
  box-shadow: inset 5px 5px 8px #919191, inset -5px -5px 8px #919191;
  border-radius: 30px;
  height: 300px;
  width: 200px;
`;

const Level = styled.span`
  transform: rotate(90deg);
  font-weight: bold;
  color: #000000;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 26px;
  bottom: 10px;
  transform: rotate(270deg);

  progress {
    position: relative;
    bottom: 35px;
  }

  progress[value] {
    width: 220px;
    -webkit-appearance: none;
    appearance: none;
  }

  progress[value]::-webkit-progress-bar {
    height: 80px;
    border-radius: 20px;
    background-color: #eeeeee;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-shadow: inset 5px 5px 8px #34383d, inset -5px -5px 8px #34383d;
  }

  progress[value]::-webkit-progress-value {
    height: 70px;
    border-radius: 14px;
    margin-left: 5px;
    background: linear-gradient(
      0.25turn,
      #51abff,
      #4fa4ff,
      ${(props) => props.color}
    );
  }
`;

export default TankProgressBar;
