// ./src/components/LoginPanel.js
import React, { useState } from "react";
import styled, { css } from "styled-components";
import Axios from "axios";

import { StyledField } from "../Field/Field.styled";

import CurrentTime from "../../components scada/CurrentTime/CurrentTime";
import EmployeesList from "../../components scada/EmployeesList/EmployeesList";
import ChartPanel from "../../components/ChartPanel/ChartPanel";

// import API from "../../components scada/API/API";



const LoginPanel = (props) => {
  const { text, setIsLoggedIn, setIsLoggedInName } = props;

  const [employeeId, setEmployeeId] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState([]);
  const [isSubmited, setIsSubmited] = useState(false);

  const [employeeList, setEmployeeList] = useState([]);

  const [filteringQuantitySum, setFilteringQuantitySum] = useState([]);

  const [showChartPanel, setShowChartPanel] = useState(false);

  const dateTime = CurrentTime();

// API
    const addEmployee = () => {
      Axios.post("http://localhost:8090/api/employees", {
        Id: employeeId,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        dateTime: dateTime.props.children,
      }).then(() => {
        setEmployeeList([
          ...employeeList,  
          {
            Id: employeeId,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            dateTime: dateTime.props.children,
          },
        ]);
      });
    };

    const getEmployees = () => {
      Axios.get("http://localhost:8090/api/employees").then((response) => {
        setEmployeeList(response.data);
      });
    };

    const deleteEmployees = () => {
      let message = "Do you want to remove all employees?"
      if (confirm(message) == true) {

        Axios.delete("http://localhost:8090/api/employees").then((response) => {
        setEmployeeList([]);
        });
        
      }
    };

    const getSumFilteringQuantity = () => {
      Axios.get("http://localhost:8090/api/process").then((response) => {
        setFilteringQuantitySum(response.data);
      });
    };

    

//------------------------------------------------------------------------------- //


  const handleSubmit = (e) => {
    e.preventDefault();

    const err = [];
    if (employeeId.length === 0 || employeeId.length <= 1) {
      err.push("* Field ID is required!");
    }

    if (firstName.length === 0 || firstName.length <= 1) {
      err.push("* First Name is required!");
    }

    if (lastName.length === 0 || lastName.length <= 1) {
      err.push("* Last Name is required!");
    }

    if (!email.includes("@")) {
      err.push("* Invalid email address!");
    }

    if (password.length < 6) {
      err.push("* Password is too short!");
    }

    if (err.length > 0) {
      alert("Login failed!");
    } else {
      alert("Welcome, you are logged in correctly!");

      addEmployee();

      setEmployeeId(1)
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setIsLoggedIn(true);

      setIsLoggedInName(firstName + " " + lastName);
    }

    setErrors(err);
    setIsSubmited(true);
  };

  return (
    <Container>
      <StyledLoginPanel
        isSubmited={isSubmited}
        isValid={isSubmited && errors.length === 0}
      >
        <Title>{text}</Title>
        <form noValidate onSubmit={handleSubmit}>
          <Row>
            <Label employeeId="employeeId">Employee Id</Label>
            <StyledField
              type="number"
              name="employeeId"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
            />
          </Row>
          <Row>
            <Label fieldName="firstName">First Name</Label>
            <StyledField
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Row>
          <Row>
            <Label fieldName="lastName">Last Name</Label>
            <StyledField
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Row>
          <Row>
            <Label fieldName="email">Email</Label>
            <StyledField
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Row>
          <Row>
            <Label fieldName="password">Password</Label>
            <StyledField
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Row>
          <RowWithButton>
            <Submit />
          </RowWithButton>
        </form>
      </StyledLoginPanel>
      <CurrentTime></CurrentTime>
      <ErrorBox>
        {errors.length > 0 ? <p>{errors.join("\n")}</p> : null}
      </ErrorBox>
      <EmployeesList getEmployees={getEmployees/*API.getEmployees*/} employeeList={employeeList} removeEmployees={deleteEmployees/*API.deleteEmployees*/}></EmployeesList>
      <ButtonChart onClick={(e) => {
        showChartPanel ? setShowChartPanel(false) : (setShowChartPanel(true), getSumFilteringQuantity())
      }}>Show Charts</ButtonChart>
      {(showChartPanel && filteringQuantitySum.length > 0) ? (<ChartPanel filteringQuantityData={filteringQuantitySum}/>) : (<></>)}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledLoginPanel = styled.section`
  background-color: #ffffff;
  border: 3px solid #e9eaed;
  padding: 20px;
  margin: 20px;
  min-width: 350px;
`;

const Title = styled.h3`
  text-align: center;
  color: #0087ff;
  margin-bottom: 20px;
  font-size: 22px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
`;

const RowWithButton = styled(Row)`
  justify-content: center;
  margin-top: 20px;
`;

const Label = styled.label.attrs((props) => ({
  htmlFor: `field-${props.fieldName}`,
}))`
  color: #0087ff;
  letter-spacing: 1px;
  width: 120px;
  height: 30px;
  border-radius: 8px;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  box-shadow: 5px 5px 6px #cccccc, -5px -5px 6px #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 5px 0;
`;

const Submit = styled.input.attrs(() => ({
  type: "submit",
  value: "Log in",
}))`
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
  height: 60px;
  border: none;
  margin: 10px;
  &:active {
    border-radius: 10px;
    background: #ffffff;
    box-shadow: inset 5px 5px 8px #c4c4c4, inset -5px -5px 8px #ffffff;
  }
`;

const ErrorBox = styled.section`
  color: red;
  width: 230px;
  font-weight: bold;
`;

const ButtonChart = styled.button`
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
  height: 60px;
  border: none;
  margin: 10px;
  &:active {
    border-radius: 10px;
    background: #ffffff;
    box-shadow: inset 5px 5px 8px #c4c4c4, inset -5px -5px 8px #ffffff;
  }
`;

export default LoginPanel;
