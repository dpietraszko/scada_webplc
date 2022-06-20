import React, { useState } from "react";
import styled, { css } from "styled-components";

const RadioButtonList = (props) => {
  const { dataRadioButtonList } = props;

  const { text, item } = dataRadioButtonList;

  const [select, setSelect] = useState("veryMuch");

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelect(value);
  };

  return (
    <Wrapper>
      <Label>{text}</Label>
      {item.map((item) => {
        return (
          <Item>
            <RadioButton
              type="radio"
              name="radio"
              value={item.value}
              checked={select === item.value}
              onChange={(e) => handleSelectChange(e)}
            />
            <RadioButtonLabel />
            <div>{item.description}</div>
          </Item>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  padding: 0px 16px 24px 16px;
  box-sizing: border-box;
  margin: 20px 0 0 50px;
`;

const Label = styled.h3`
  color: #0087ff;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #ebecf0;
  box-shadow: inset 4px 4px 4px #b0b1b4, inset -4px -4px 4px #ffffff;
  border: 1px solid #bebebe;
`;
const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #bebebe;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      background: #eeeeee;
    }
  }
  ${(props) =>
    props.checked &&
    ` 
    &:checked + ${RadioButtonLabel} {
      background: #0087ff;
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        margin: 6px;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
        background: white;
      }
    }
  `}
`;

export default RadioButtonList;
