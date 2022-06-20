// ./src/components scada/ScadaPanel.js
import React, { useState } from "react";
import styled, { css } from "styled-components";

import TankProgressBar from "../../components scada/TankProgressBar/TankProgressBar";
import PipeStraight from "../../components scada/PipeStraight/PipeStraight";
import Valve from "../../components scada/Valve/Valve";
import PipeAngle from "../../components scada/PipeAngle/PipeAngle";
import OnOffSwitchToggle from "../../components scada/OnOffSwitchToggle/OnOffSwitchToggle";

import ControlPanel from "../../components scada/ControlPanel/ControlPanel";

import CountUpDownTank from "../../components scada/CountUpDownTank/CountUpDownTank";
import CountUpDownPipe from "../../components scada/CountUpDownPipe/CountUpDownPipe";
import Counter from "../../components scada/Counter/Counter";

const ScadaPanel = (props) => {
  const { setIsLoggedIn, setIsLoggedInName } = props;

  // Sterowanie za pomoca JS
  const varOpenClose_Valve_empty = 0;

  const [varOpenClose_Valve_1_1, setOpenClose_Valve_1_1] = useState(0);
  const [varOpenClose_Valve_2_1, setOpenClose_Valve_2_1] = useState(0);
  const [varOpenClose_Valve_3_1, setOpenClose_Valve_3_1] = useState(0);
  const [varOpenClose_Valve_4_1, setOpenClose_Valve_4_1] = useState(0);

  const [varTurnOnOff_Dioda_5_2, setTurnOnOff_Dioda_5_2] = useState(0);
  const [varStart, setStart] = useState(0);
  const [varEndFiltering, setEndFiltering] = useState(0);

  // Hook
  const [checked_Switch_1_1, setChecked_Switch_1_1] = useState(false);
  const [checked_Switch_2_1, setChecked_Switch_2_1] = useState(false);
  const [checked_Switch_3_1, setChecked_Switch_3_1] = useState(false);
  const [checked_Switch_4_1, setChecked_Switch_4_1] = useState(false);

  // MessagePanel

  const [varMessage, setMessage] = useState("FILL TANK 1");

  // Valve
  const openClose_Valve_1_1 = varOpenClose_Valve_1_1;
  const openClose_Valve_2_1 = varOpenClose_Valve_2_1;
  const openClose_Valve_3_1 = varOpenClose_Valve_3_1;
  const openClose_Valve_4_1 = varOpenClose_Valve_4_1;

  // Tank
  const level_Tank_1 = 10;
  const level_Tank_2 = 10;

  const colorGradientOK_Tank_1 = "#0087ff";
  const colorGradientNOK_Tank_1 = "#606060";
  const colorGradientOK_Tank_2 = "#0087ff";

  // Counter
  const varTime = 20;

  // PipeStraight
  const valueMin_PipeStraight = 0;
  const valueMax_PipeStraight = 100;
  const level_PipeStraight_1_1 = 100;
  const level_PipeStraight_1_2 = 0;
  const level_PipeStraight_2_1 = 100;
  const level_PipeStraight_2_2 = 0;
  const level_PipeStraight_3_1 = 100;
  const level_PipeStraight_3_2 = 100;
  const level_PipeStraight_4_1 = 100;
  const valueLenght_PipeStraight_1_1 = 240;
  const valueLenght_PipeStraight_1_2 = 150;
  const valueLenght_PipeStraight_2_1 = 210;
  const valueLenght_PipeStraight_2_2 = 150;
  const valueLenght_PipeStraight_3_1 = 50;
  const valueLenght_PipeStraight_3_2 = 50;
  const valueLenght_PipeStraight_4_1 = 0;
  const valueMoveBottom_PipeStraight_1_1 = 20;
  const valueMoveBottom_PipeStraight_1_2 = 0;
  const valueMoveBottom_PipeStraight_2_1 = 20;
  const valueMoveBottom_PipeStraight_2_2 = 0;
  const valueMoveBottom_PipeStraight_3_1 = 20;
  const valueMoveBottom_PipeStraight_3_2 = 0;
  const valueMoveBottom_PipeStraight_4_1 = 20;

  const colorGradient_PipeStraight_1_1 = "#7f7f7f";
  const colorGradient_PipeStraight_1_2 = "#7f7f7f";
  const colorGradient_PipeStraight_2_1 = "#606060";
  const colorGradient_PipeStraight_2_2 = "#606060";
  const colorGradient_PipeStraight_3_1 = "#0087ff";
  const colorGradient_PipeStraight_3_2 = "#0087ff";
  const colorGradient_PipeStraight_4_1 = "#0087ff";

  // PipeAngle
  const valueMoveBottom_PipeAngle_1_1 = -21;
  const valueMoveRight_PipeAngle_1_1 = 37;
  const valueRotate_PipeAngle_1_1 = 90;
  const valueMoveBottom_PipeAngle_3_1 = 41;
  const valueMoveRight_PipeAngle_3_1 = -36;
  const valueRotate_PipeAngle_3_1 = 270;

  // Switch
  const valueMoveTop_Switch_1_1 = -1040;
  const valueMoveRight_Switch_1_1 = 295;
  const valueMoveTop_Switch_2_1 = -1430;
  const valueMoveRightSwitch_2_1 = 322;
  const valueMoveTop_Switch_3_1 = -1625;
  const valueMoveRight_Switch_3_1 = -190;
  const valueMoveTop_Switch_4_1 = -1942;
  const valueMoveRight_Switch_4_1 = -558;

  // Function Pipe
  const varValue_PipeStraight_1_2 = CountUpDownPipe(
    level_PipeStraight_1_2,
    varOpenClose_Valve_1_1,
    valueMin_PipeStraight,
    valueMax_PipeStraight
  );

  const varValue_PipeStraight_2_2 = CountUpDownPipe(
    level_PipeStraight_2_2,
    varOpenClose_Valve_2_1,
    valueMin_PipeStraight,
    valueMax_PipeStraight
  );

  const varValue_PipeStraight_3_2 = CountUpDownPipe(
    level_PipeStraight_3_2,
    varOpenClose_Valve_3_1,
    valueMin_PipeStraight,
    valueMax_PipeStraight
  );

  // Function Tank
  const varValue_Middle_Tank_1 = CountUpDownTank(
    level_Tank_1,
    varOpenClose_Valve_1_1,
    varOpenClose_Valve_2_1,
    varOpenClose_Valve_3_1
  );

  if (
    (varValue_Middle_Tank_1 > 92 && varOpenClose_Valve_1_1 == 1) ||
    (varValue_Middle_Tank_1 > 92 && varOpenClose_Valve_2_1 == 1)
  ) {
    setOpenClose_Valve_1_1(0);
    setChecked_Switch_1_1(0);
    setOpenClose_Valve_2_1(0);
    setChecked_Switch_2_1(0);
    setMessage("TURN ON FILTERING");
  } else if (varValue_Middle_Tank_1 < 14 && varOpenClose_Valve_3_1 == 1) {
    setOpenClose_Valve_3_1(0);
    setChecked_Switch_3_1(0);
    setMessage("FILL TANK 1");
  }

  const varValue_Right_Tank_2 = CountUpDownTank(
    level_Tank_2,
    varOpenClose_Valve_3_1,
    varOpenClose_Valve_empty,
    varOpenClose_Valve_4_1
  );
  if (varValue_Right_Tank_2 > 92 && varOpenClose_Valve_3_1 == 1) {
    setOpenClose_Valve_3_1(0);
    setChecked_Switch_3_1(0);
  } else if (varValue_Right_Tank_2 < 14 && varOpenClose_Valve_4_1 == 1) {
    setOpenClose_Valve_4_1(0);
    setChecked_Switch_4_1(0);
  }

  if (
    (varOpenClose_Valve_1_1 == 1 && varTurnOnOff_Dioda_5_2 == 0) ||
    (varOpenClose_Valve_2_1 == 1 && varTurnOnOff_Dioda_5_2 == 0) ||
    (varOpenClose_Valve_3_1 == 1 && varTurnOnOff_Dioda_5_2 == 0) ||
    (varOpenClose_Valve_4_1 == 1 && varTurnOnOff_Dioda_5_2 == 0)
  ) {
    setTurnOnOff_Dioda_5_2(1);
  } else if (
    varOpenClose_Valve_1_1 == 0 &&
    varTurnOnOff_Dioda_5_2 == 1 &&
    varOpenClose_Valve_2_1 == 0 &&
    varTurnOnOff_Dioda_5_2 == 1 &&
    varOpenClose_Valve_3_1 == 0 &&
    varTurnOnOff_Dioda_5_2 == 1 &&
    varOpenClose_Valve_4_1 == 0 &&
    varTurnOnOff_Dioda_5_2 == 1
  ) {
    setTurnOnOff_Dioda_5_2(0);
  }

  // Funkcje
  const varCounter = Counter(varTime, varStart);

  const checkStartCounter = () => {
    if (
      varValue_Middle_Tank_1 > 92 &&
      varEndFiltering == 0 &&
      varCounter == varTime &&
      varStart == 0
    ) {
      setStart(1);
    } else if (
      varValue_Middle_Tank_1 > 92 &&
      varCounter >= 1 &&
      varStart == 1
    ) {
      setStart(0);
    }
  };

  if (varValue_Middle_Tank_1 > 92 && varCounter == 0 && varStart == 1) {
    setStart(0);
  }

  if (varCounter == 0 && varEndFiltering == 0) {
    setEndFiltering(1);
    setMessage("EMPTY TANK 1");
  } else if (
    varCounter > 0 &&
    varEndFiltering == 1 &&
    varValue_Middle_Tank_1 <= 14
  ) {
    setEndFiltering(0);
  }

  if (
    varValue_Right_Tank_2 > 92 &&
    varEndFiltering == 1 &&
    varMessage != "EMPTY TANK 2"
  ) {
    setMessage("EMPTY TANK 2");
  } else if (
    varValue_Right_Tank_2 < 92 &&
    varEndFiltering == 1 &&
    varMessage == "EMPTY TANK 2"
  ) {
    setMessage("EMPTY TANK 1");
  }

  return (
    <Container>
      <Content>
        <ContentHeader>
          <Header>{"Logged: " + setIsLoggedInName}</Header>
          <LoggedOutButton onClick={(e) => setIsLoggedIn(false)}>Log out</LoggedOutButton>
        </ContentHeader>
        <Middle_Tank_1>
          <TankProgressBar
            value={varValue_Middle_Tank_1}
            valueColorGradient={
              varEndFiltering ? colorGradientOK_Tank_1 : colorGradientNOK_Tank_1
            }
          ></TankProgressBar>
        </Middle_Tank_1>
        <Group_1>
          <PipeAngle
            valueMoveBottom={valueMoveBottom_PipeAngle_1_1}
            valueMoveRight={valueMoveRight_PipeAngle_1_1}
            valueRotate={valueRotate_PipeAngle_1_1}
          ></PipeAngle>
          <PipeStraight
            value={varValue_PipeStraight_1_2}
            valueLenght={valueLenght_PipeStraight_1_2}
            valueMoveBottom={valueMoveBottom_PipeStraight_1_2}
            valueColorGradient={colorGradient_PipeStraight_1_2}
          ></PipeStraight>
          <Valve value={openClose_Valve_1_1}></Valve>
          <PipeStraight
            value={level_PipeStraight_1_1}
            valueLenght={valueLenght_PipeStraight_1_1}
            valueMoveBottom={valueMoveBottom_PipeStraight_1_1}
            valueColorGradient={colorGradient_PipeStraight_1_1}
          ></PipeStraight>
        </Group_1>
        <OnOffSwitchToggle
          valueMoveTop={valueMoveTop_Switch_1_1}
          valueMoveRight={valueMoveRight_Switch_1_1}
          idName={"checkbox_1_1"}
          checked={checked_Switch_1_1}
          onChange={() => {
            checked_Switch_1_1 === false && varEndFiltering == 0
              ? setChecked_Switch_1_1(true)
              : setChecked_Switch_1_1(false);
          }}
          onClick={() => {
            checked_Switch_1_1 === false && varEndFiltering == 0
              ? setOpenClose_Valve_1_1(1)
              : setOpenClose_Valve_1_1(0);
          }}
        ></OnOffSwitchToggle>
        <Group_2>
          <PipeStraight
            value={varValue_PipeStraight_2_2}
            valueLenght={valueLenght_PipeStraight_2_2}
            valueMoveBottom={valueMoveBottom_PipeStraight_2_2}
            valueColorGradient={colorGradient_PipeStraight_2_2}
          ></PipeStraight>
          <Valve value={openClose_Valve_2_1}></Valve>
          <PipeStraight
            value={level_PipeStraight_2_1}
            valueLenght={valueLenght_PipeStraight_2_1}
            valueMoveBottom={valueMoveBottom_PipeStraight_2_1}
            valueColorGradient={colorGradient_PipeStraight_2_1}
          ></PipeStraight>
        </Group_2>
        <OnOffSwitchToggle
          valueMoveTop={valueMoveTop_Switch_2_1}
          valueMoveRight={valueMoveRightSwitch_2_1}
          idName={"checkbox_2_1"}
          checked={checked_Switch_2_1}
          onChange={() => {
            checked_Switch_2_1 === false && varEndFiltering == 0
              ? setChecked_Switch_2_1(true)
              : setChecked_Switch_2_1(false);
          }}
          onClick={() => {
            checked_Switch_2_1 === false && varEndFiltering == 0
              ? setOpenClose_Valve_2_1(1)
              : setOpenClose_Valve_2_1(0);
          }}
        ></OnOffSwitchToggle>
        <Group_3>
          <PipeStraight
            value={varValue_PipeStraight_3_2}
            valueLenght={valueLenght_PipeStraight_3_2}
            valueMoveBottom={valueMoveBottom_PipeStraight_3_2}
            valueColorGradient={colorGradient_PipeStraight_3_2}
          ></PipeStraight>
          <Valve value={openClose_Valve_3_1}></Valve>
          <PipeStraight
            value={level_PipeStraight_3_1}
            valueLenght={valueLenght_PipeStraight_3_1}
            valueMoveBottom={valueMoveBottom_PipeStraight_3_1}
            valueColorGradient={colorGradient_PipeStraight_3_1}
          ></PipeStraight>
          <PipeAngle
            valueMoveBottom={valueMoveBottom_PipeAngle_3_1}
            valueMoveRight={valueMoveRight_PipeAngle_3_1}
            valueRotate={valueRotate_PipeAngle_3_1}
          ></PipeAngle>
        </Group_3>
        <OnOffSwitchToggle
          valueMoveTop={valueMoveTop_Switch_3_1}
          valueMoveRight={valueMoveRight_Switch_3_1}
          idName={"checkbox_3_1"}
          checked={checked_Switch_3_1}
          onChange={() => {
            checked_Switch_3_1 === false && varEndFiltering == 1
              ? setChecked_Switch_3_1(true)
              : setChecked_Switch_3_1(false);
          }}
          onClick={() => {
            checked_Switch_3_1 === false && varEndFiltering == 1
              ? setOpenClose_Valve_3_1(1)
              : setOpenClose_Valve_3_1(0);
          }}
        ></OnOffSwitchToggle>
        <Right_Tank_2>
          <TankProgressBar
            value={varValue_Right_Tank_2}
            valueColorGradient={colorGradientOK_Tank_2}
          ></TankProgressBar>
        </Right_Tank_2>
        <Group_4>
          <Valve value={openClose_Valve_4_1}></Valve>
          <PipeStraight
            value={level_PipeStraight_4_1}
            valueLenght={valueLenght_PipeStraight_4_1}
            valueMoveBottom={valueMoveBottom_PipeStraight_4_1}
            valueColorGradient={colorGradient_PipeStraight_4_1}
          ></PipeStraight>
        </Group_4>
        <OnOffSwitchToggle
          valueMoveTop={valueMoveTop_Switch_4_1}
          valueMoveRight={valueMoveRight_Switch_4_1}
          checked={checked_Switch_4_1}
          idName={"checkbox_4_1"}
          onChange={() => {
            checked_Switch_4_1 === false
              ? setChecked_Switch_4_1(true)
              : setChecked_Switch_4_1(false);
          }}
          onClick={() => {
            checked_Switch_4_1 === false
              ? setOpenClose_Valve_4_1(1)
              : setOpenClose_Valve_4_1(0);
          }}
        ></OnOffSwitchToggle>
        <ControlPanel
          text={"Control Panel"}
          turnOnOff_Dioda_5_2={varTurnOnOff_Dioda_5_2}
          value_Middle_Tank_1={varValue_Middle_Tank_1}
          onStartCounter={checkStartCounter}
          propsCounter={varCounter}
          propsEndFiltering={varEndFiltering}
          propsVarMessage={varMessage}
        ></ControlPanel>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  border: 3px solid #e9eaed;
  width: 1200px;
`;

const Header = styled.div`
  color: #0087ff;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 1px;
  width: 400px;
  height: 50px;
  border-radius: 8px;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  box-shadow: 5px 5px 6px #cccccc, -5px -5px 6px #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 40px 20px;
  padding: 10px;
`;

const Group_1 = styled.div`
  position: relative;
  top: -602px;
  left: -250px;
  transform: rotate(90deg);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Group_2 = styled.div`
  position: relative;
  top: -1100px;
  left: -359px;
  transform: rotate(90deg);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Group_3 = styled.div`
  position: relative;
  top: -1332px;
  left: 88px;
  transform: rotate(90deg);
`;

const Group_4 = styled.div`
  position: relative;
  top: -1810px;
  left: 536px;
  transform: rotate(90deg);
`;

const Middle_Tank_1 = styled.div`
  position: relative;
  top: 142px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
`;

const Right_Tank_2 = styled.div`
  position: relative;
  bottom: 1690px;
  left: 412px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
`;

const LoggedOutButton = styled.button`
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
  height: 50px;
  border: none;
  margin: 10px 20px 40px 0;
  &:active {
    border-radius: 10px;
    background: #ffffff;
    box-shadow: inset 5px 5px 8px #c4c4c4, inset -5px -5px 8px #ffffff;
  }
`;

const ContentHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default ScadaPanel;
