// ./src/components scada/ControlPanel.js
import React, { useState } from "react";
import styled, { css } from "styled-components";
import Axios from "axios";

import OnOffSwitchToggle from "../OnOffSwitchToggle/OnOffSwitchToggle";
import CurrentTime from "../CurrentTime/CurrentTime";
import MessagePanel from "../MessagePanel/MessagePanel";

const ControlPanel = (props) => {
  const {
    text,
    turnOnOff_Dioda_5_2,
    value_Middle_Tank_1,
    onStartCounter,
    propsCounter,
    propsEndFiltering,
    propsVarMessage,
  } = props;

const [processList, setProcessList] = useState([]);
const [filteringQuantity, setFilteringQuantity] = useState(1);

// const [filteringQuantityAll, setFilteringQuantityAll] = useState([]);

const dateTime = CurrentTime();
const strDateTime = dateTime.props.children.toString();
const processId = (((((strDateTime.replace("-", "")).replace("-", "")).replace(" ", "")).replace(":", "")).replace(":", "")).substr(4);
const arrDateTime = strDateTime.split(' ');
const date = arrDateTime[0];
const time = arrDateTime[1];

// API -------------------------------------------------------------------- //

const addProcess = () => {
  Axios.post("http://localhost:8090/api/process", {
    Id: processId,
    filteringQuantity: filteringQuantity,
    dateTime: dateTime.props.children,
    date: date,
  }).then(() => {
    setProcessList([
      ...processList,  
      {
        Id: processId,
        filteringQuantity: filteringQuantity,
        dateTime: dateTime.props.children,
        date: date,
      },
    ]);
  });
};

// Działająca funkcjonalność

// const getFilteringQuantity = () => {
//   Axios.get("http://localhost:8090/api/process").then((response) => {
//     setFilteringQuantityAll(response.data);
//   });
// };

//------------------------------------------------------------------------------- //

  // Sterowanie za pomoca JS
  const [varTurnOnOff_Dioda_5_1, setTurnOnOff_Dioda_5_1] = useState(0);
  const [varCheckTurnOnOff_Dioda_5_2, setCheckTurnOnOff_Dioda_5_2] =
    useState(0);

  // Switch
  const valueMoveTop_Switch_5_1 = 17;
  const valueMoveRight_Switch_5_1 = 34;

  // TextField
  const valueTextFieldFiltering = "Filtering the liquid";
  const valueTextFieldWork = "Work signal";

  // Hook
  const [checked_Switch_5_1, setChecked_Switch_5_1] = useState(false);

  // Field
  const valueMoveTop_FieldFilter = 0;
  const valueMoveRight_FieldFilter = 0;
  const valueMoveTop_FieldWork = 0;
  const valueMoveRight_FieldWork = 0;

  // Var
  const turnOnOff_Dioda_5_1 = varTurnOnOff_Dioda_5_1;
  const varCounter = propsCounter;
  const varEndFiltering = propsEndFiltering;
  

  if (varCounter == 0 && varEndFiltering == 1 && checked_Switch_5_1 == 1) {
    setChecked_Switch_5_1(0);
    setTurnOnOff_Dioda_5_1(0);
    addProcess();
  }

  // Zabezpieczenia
  if (
    (turnOnOff_Dioda_5_2 == 1 && varCheckTurnOnOff_Dioda_5_2 == 0) ||
    (varTurnOnOff_Dioda_5_1 == 1 && varCheckTurnOnOff_Dioda_5_2 == 0)
  ) {
    setCheckTurnOnOff_Dioda_5_2(1);
  } else if (
    turnOnOff_Dioda_5_2 == 0 &&
    varCheckTurnOnOff_Dioda_5_2 == 1 &&
    varTurnOnOff_Dioda_5_1 == 0 &&
    varCheckTurnOnOff_Dioda_5_2 == 1
  ) {
    setCheckTurnOnOff_Dioda_5_2(0);
  }

  if (
    checked_Switch_5_1 == 1 &&
    value_Middle_Tank_1 > 92 &&
    varTurnOnOff_Dioda_5_1 == 0
  ) {
    setTurnOnOff_Dioda_5_1(1);
  } else if (checked_Switch_5_1 == 0 && varTurnOnOff_Dioda_5_1 == 1) {
    setTurnOnOff_Dioda_5_1(0);
  }

  return (
    <Container>
      <Title>{text}</Title>
      <CurrentTime></CurrentTime>
      <TextField
        valueMoveTop={valueMoveTop_FieldFilter}
        valueMoveRight={valueMoveRight_FieldFilter}
      >
        {valueTextFieldFiltering}
      </TextField>
      <OnOffSwitchToggle
        valueMoveTop={valueMoveTop_Switch_5_1}
        valueMoveRight={valueMoveRight_Switch_5_1}
        idName={"checkbox_5_1"}
        checked={checked_Switch_5_1}
        onChange={() => {
          checked_Switch_5_1 === false &&
          value_Middle_Tank_1 > 92 &&
          propsEndFiltering == 0
            ? setChecked_Switch_5_1(true)
            : setChecked_Switch_5_1(false);
        }}
        onClick={onStartCounter}
      ></OnOffSwitchToggle>
      <Diode turnOnOff={turnOnOff_Dioda_5_1}></Diode>
      <Timer>{varCounter}</Timer>
      <TextField
        valueMoveTop={valueMoveTop_FieldWork}
        valueMoveRight={valueMoveRight_FieldWork}
      >
        {valueTextFieldWork}
      </TextField>
      <DiodeWork turnOnOff={varCheckTurnOnOff_Dioda_5_2}></DiodeWork>
      <MessagePanel text={propsVarMessage}></MessagePanel>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  border: 1px solid #e9eaed;
  width: 300px;
  height: 430px;
  position: relative;
  left: 350px;
  bottom: 2620px;
  color: #0087ff;
  border-radius: 8px;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  box-shadow: 5px 5px 6px #cccccc, -5px -5px 6px #ffffff;
  margin: 20px 0 40px 0;
  padding: 10px;
`;

const Title = styled.h3`
  text-align: center;
  color: #0087ff;
  margin-bottom: 10px;
  font-size: 22px;
`;

const TextField = styled.h3`
  text-align: center;
  color: #000000;
  margin-bottom: 10px;
  font-size: 16px;
  padding: 5px;
  position: relative;
  top: ${(props) => props.valueMoveTop}px;
  right: ${(props) => props.valueMoveRight}px;
  border-radius: 8px;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  box-shadow: 5px 5px 6px #cccccc, -5px -5px 6px #ffffff;
`;

const Diode = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.turnOnOff === 0 ? "#000000" : "#00ff0c"};
  border: 4px solid #595959;
  box-shadow: inset 5px 5px 8px #34383d, inset -5px -5px 8px #34383d;
  position: relative;
  bottom: 20px;
  right: -48px;
`;

const DiodeWork = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.turnOnOff === 1 ? "#00ff0c" : "#cecdc0"};
  border: 4px solid #595959;
  box-shadow: inset 5px 5px 8px #34383d, inset -5px -5px 8px #34383d;
  position: relative;
  top: ${(props) => props.valueMoveTop}px;
  right: ${(props) => props.valueMoveRight}px;
`;

const Timer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #000000;
  border: 1px solid #e9eaed;
  margin-bottom: 20px;
  width: 40px;
  height: 40px;
  border-radius: 2px;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  box-shadow: 5px 5px 6px #cccccc, -5px -5px 6px #ffffff;
`;

export default ControlPanel;
