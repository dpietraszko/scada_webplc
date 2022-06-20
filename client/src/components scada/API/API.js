import React, { useState } from "react";
// import styled, { css, keyframes } from "styled-components";
import Axios from "axios";

const getEmployees = () => {
  Axios.get("http://localhost:8090/api/employees").then((response) => {
    setEmployeeList(response.data);   // pomyśleć jak to rozwiąząć
  });
};

const deleteEmployees = () => {
  let message = "Do you want to remove all employees?"
  if (confirm(message) == true) {

    Axios.delete("http://localhost:8090/api/employees").then((response) => {
    setEmployeeList([]);  // pomyśleć jak to rozwiąząć
    });
  }
};

export default {
  deleteEmployees,
  getEmployees,
};