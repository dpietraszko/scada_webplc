import React, { useState, useReducer } from "react";
import styled, { css } from "styled-components";
import useErrors from "./validationForm";

import Button from "../Button/Button";
import ProgressBar from "../ProgressBar/ProgressBar";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import Dropdown from "../Dropdown/Dropdown";
import RadioButtonList from "../RadioButtonList/RadioButtonList";

import { StyledField } from "../Field/Field.styled";

// SCADA
import ScadaPanel from "../ScadaPanel/ScadaPanel";

const RegistrationPanel = (props) => {
  const init = {
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    date: "",
    time: "",
  };

  const { setIsLoggedIn } = props;

  const reducer = (state, { name, value }) => {
    return { ...state, [name]: value };
  };

  const [state, dispatch] = useReducer(reducer, init);
  const { firstName, lastName, email, tel, date, time } = state;

  const [progress, setProgress] = useState(0);
  const [validationForm] = useErrors(state);

  const [fieldFirstName, setFieldFirstName] = useState(false);
  const [fieldLastName, setFieldLastName] = useState(false);
  const [fieldEmail, setFieldEmail] = useState(false);
  const [fieldTel, setFieldTel] = useState(false);
  const [fieldDate, setFieldDate] = useState(false);
  const [fieldTime, setFieldTime] = useState(false);
  const [checked, setChecked] = useState(false);

  const [gender, setGender] = useState("Gender");
  const [isClickRate, setIsClickRate] = useState(false);
  const [errors, setErrors] = useState([]);

  // SCADA
  const [isClickScada, setIsClickScada] = useState(false);

  const dataDropdwon = {
    name: gender,
    item: ["Male", "Female"],
  };

  const dataRadioButtonList = {
    text: "Rate the registration panel",
    item: [
      { value: "veryMuch", description: "I like it very much" },
      { value: "isGood", description: "The panel is good" },
      { value: "doNotLike", description: "I do not like" },
    ],
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const err = validationForm();

    if (err.length > 0) {
      setErrors(err);
    } else {
      window.alert(
        "Dane zostały wprowadzone poprawnie. Wizyta została zarejestrowana !!!"
      );
    }
  };

  const handleClickLogOn = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
  };

  const handleClickRate = (e) => {
    e.preventDefault();
    isClickRate === true ? setIsClickRate(false) : setIsClickRate(true);
  };

  // SCADA
  const handleClickScada = (e) => {
    e.preventDefault();
    isClickScada === true ? setIsClickScada(false) : setIsClickScada(true);
  };

  return (
    <Container>
      <StyledSection onSubmit={handleSubmit}>
        <Title>The register in the SCADA system</Title>
        <StyledForm noValidate>
          <StyledField
            name="firstName"
            value={firstName}
            type="text"
            onChange={(e) => dispatch(e.target)}
            onBlur={(e) => {
              if (firstName.length > 2 && fieldFirstName === false) {
                setProgress(progress + 12);
                setFieldFirstName(true);
              }
              return dispatch(e.target);
            }}
            placeholder="Name"
            required
          />
          <StyledField
            name="lastName"
            value={lastName}
            type="text"
            onChange={(e) => dispatch(e.target)}
            onBlur={(e) => {
              if (lastName.length > 2 && fieldLastName === false) {
                setProgress(progress + 12);
                setFieldLastName(true);
              }
              return dispatch(e.target);
            }}
            placeholder="LastName"
            required
          />
          <StyledField
            name="email"
            value={email}
            type="email"
            onChange={(e) => dispatch(e.target)}
            onBlur={(e) => {
              if (email.length > 2 && fieldEmail === false) {
                setProgress(progress + 12);
                setFieldEmail(true);
              }
              return dispatch(e.target);
            }}
            placeholder="Email"
            required
          />
          <StyledField
            name="tel"
            value={tel}
            type="tel"
            onChange={(e) => dispatch(e.target)}
            onBlur={(e) => {
              if (tel.length > 2 && fieldTel === false) {
                setProgress(progress + 12);
                setFieldTel(true);
              }
              return dispatch(e.target);
            }}
            placeholder="Phone"
          />
          <StyledField
            name="date"
            value={date}
            type="date"
            onChange={(e) => dispatch(e.target)}
            onBlur={(e) => {
              if (date.length > 2 && fieldDate === false) {
                setProgress(progress + 12);
                setFieldDate(true);
              }
              return dispatch(e.target);
            }}
          />
          <StyledField
            name="time"
            value={time}
            type="time"
            onChange={(e) => dispatch(e.target)}
            onBlur={(e) => {
              if (time.length > 2 && fieldTime === false) {
                setProgress(progress + 12);
                setFieldTime(true);
              }
              return dispatch(e.target);
            }}
          />
          <Dropdown
            dataDropdwon={dataDropdwon}
            setGender={setGender}
            progress={progress}
            setProgress={setProgress}
          />
          <ProgressBar value={progress} />
          <MessageRow>
            <ToggleSwitch
              checked={checked}
              onChange={() => {
                checked === false ? setChecked(true) : setChecked(false);
              }}
              onClick={() => {
                if (checked === false) {
                  setProgress(progress + 16);
                } else {
                  setProgress(progress - 16);
                }
              }}
            />
            <Info>
              Zapoznałem się z regulaminem i akceptuję jego treść, ponadto
              wyrażam zgodę na przekazanie moich danych osobowych
              administratorowi danych.
            </Info>
          </MessageRow>
          {progress === 100 ? (
            <Submit type="submit" value="Send" />
          ) : (
            <div></div>
          )}
        </StyledForm>
      </StyledSection>
      <AsideContainer>
        <Button text="Log out" onClick={handleClickLogOn} />
        <Button text="Rate" onClick={handleClickRate} />
        {isClickRate ? (
          <RadioButtonList dataRadioButtonList={dataRadioButtonList} />
        ) : (
          <div></div>
        )}
        {progress === 100 ? (
          <Button text="SCADA" onClick={handleClickScada} />
        ) : (
          <div></div>
        )}
        <ErrorBox>
          {errors.length > 0 ? <p>{errors.join("\n")}</p> : null}
        </ErrorBox>
      </AsideContainer>
      {isClickScada ? <ScadaPanel /> : <div>Powinno się wyświetlić !!!</div>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const AsideContainer = styled.aside`
  display: block;
  width: 350px;
`;

const StyledSection = styled.section`
  display: block;
  border: 1px solid #e9eaed;
  padding: 20px;
  max-width: 500px;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  text-align: center;
  color: #0087ff;
  margin-bottom: 20px;
  font-size: 22px;
`;

// const Field = styled.input`
//   border-radius: 10px;
//   background: #ffffff;
//   box-shadow: inset 5px 5px 8px #c4c4c4, inset -5px -5px 8px #ffffff;
//   border: none;
//   width: 180px;
//   height: 40px;
//   margin: 10px;
//   padding-left: 15px;
//   font-size: 14px;
//   &:focus {
//     background: #bce0ff;
//   }
// `;

const Submit = styled.input`
  letter-spacing: 1px;
  color: #0087ff;
  font-weight: bold;
  font-size: 16px;
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

const MessageRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const Info = styled.p`
  font-size: 14px;
  width: 300px;
  margin-left: 10px;
  color: black;
  text-align: left;
`;

const ErrorBox = styled.section`
  color: red;
  width: 280px;
  font-weight: bold;
  margin: 20px;
`;

export default RegistrationPanel;
