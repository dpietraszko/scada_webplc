import React from "react";
import styled, { css, keyframes } from "styled-components";

const EmployeesList = (props) => {
  const { getEmployees, employeeList, removeEmployees } = props;

  return (
    <Container>
      <ContentButton>
      <EmployeesButton onClick={getEmployees}>Show Employees</EmployeesButton>
      <EmployeesButton onClick={removeEmployees}>Remove Employees</EmployeesButton>
      </ContentButton>
          <List>
            {employeeList.map((val, key) => {
              return (
                <Content key={val.Id}>
                  <EmployeeList>
                    <Row>Id: {val.Id}</Row>
                    <Row>First Name: {val.firstName}</Row>
                    <Row>Last Name: {val.lastName}</Row>
                    <Row>Email: {val.email}</Row>
                    {/* <h3>Password: {val.password}</h3> */}
                    <Row>Data and Time: {val.dateTime.split('T')[0]+' '+val.dateTime.substr(11, 8)}</Row>
                  </EmployeeList>
                </Content>
              );
            })}
          </List>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  color: #000000;
  width: 500px;
  padding: 5px;
  position: relative;
  top: 12px;
  border-radius: 5px;
  background-color: #ffffff;
  font-size: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 900px;
`;

const ContentButton = styled.div`
  display: flex;
`;

const EmployeesButton = styled.button`
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

const Content = styled.div`
  width: 280px;
  height: auto;
  border: 2px solid #e9eaed;
  padding: 5px;
  margin: 5px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 8px;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  box-shadow: 5px 5px 6px #cccccc, -5px -5px 6px #ffffff;
`;

const EmployeeList = styled.ul`
  list-style-type: none;
`;

const Row = styled.li`
  list-style-type: none;
  font-size: 12px;
  color: #000000;
  letter-spacing: 1px;
`;

export default EmployeesList;
