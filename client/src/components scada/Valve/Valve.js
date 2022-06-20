import React from "react";
import styled, { css, keyframes } from "styled-components";

const Valve = (props) => {
  const { value } = props;

  return (
    <Content>
      <Nut></Nut>
      <Pipe>
        {value === 0 ? (
          <BallValveClosed></BallValveClosed>
        ) : (
          <BallValveOpen></BallValveOpen>
        )}
      </Pipe>
      <Nut></Nut>
      {value === 0 ? <LoverClosed></LoverClosed> : <LoverOpen></LoverOpen>}
    </Content>
  );
};

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Pipe = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  height: 50px;
  width: 40px;
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
  z-index: 1;
`;

const BallValveClosed = styled.div`
  background: linear-gradient(#fc3c3c, #fc3c3c, #fc3c3c);
  border: 4px solid #adadad;
  border-radius: 50%;
  height: 26px;
  width: 26px;
  z-index: 3;
`;

const BallValveOpen = styled.div`
  background: linear-gradient(#37ff00, #37ff00, #37ff00);
  border: 4px solid #adadad;
  border-radius: 50%;
  height: 26px;
  width: 26px;
  z-index: 3;
`;

const LoverClosed = styled.div`
  background: linear-gradient(#eae8e8, #c4c4c4, #eae8e8);
  border: 3px solid #adadad;
  border-radius: 0 10px 10px 0;
  height: 18px;
  width: 34px;
  position: relative;
  left: 25px;
  bottom: 49px;
  z-index: 2;
`;

const LoverOpen = styled.div`
  background: linear-gradient(#eae8e8, #c4c4c4, #eae8e8);
  border: 3px solid #adadad;
  border-radius: 0 10px 10px 0;
  height: 18px;
  width: 34px;
  position: relative;
  left: 0;
  bottom: 74px;
  z-index: 2;
  transform: rotate(270deg);
`;

export default Valve;
