import React from "react";
import styled, { css, keyframes } from "styled-components";

const OnOffSwitchToggle = ({
  idName,
  checked,
  onChange,
  onClick,
  valueMoveTop,
  valueMoveRight,
}) => (
  <CheckBoxWrapper moveTop={valueMoveTop} moveRight={valueMoveRight}>
    <CheckBox
      id={idName}
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      onClick={onClick}
    />
    <CheckBoxLabel htmlFor={idName} />
  </CheckBoxWrapper>
);

const CheckBoxWrapper = styled.div`
  position: relative;
  top: ${(props) => props.moveTop}px;
  right: ${(props) => props.moveRight}px;
`;

const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 62px;
  height: 32px;
  background: #000000;
  box-shadow: inset 4px 4px 4px #b0b1b4, inset -4px -4px 4px #b0b1b4;
  cursor: pointer;
  &::after {
    content: "Off";
    display: block;
    border-radius: 3px;
    width: 30px;
    height: 21px;
    margin: 5px 5px 5px 6px;
    background: #fc3c3c;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    color: #ebecf0;
    font-weight: bold;
    padding: 0 3px 0 3px;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  width: 62px;
  height: 32px;
  &:checked + ${CheckBoxLabel} {
    background: #000000;
    &::after {
      content: "On";
      display: block;
      border-radius: 3px;
      width: 30px;
      height: 21px;
      margin-left: 21px;
      transition: 0.3s;
      background: #37ff00;
      padding: 0 0 0 5px;
    }
  }
`;

export default OnOffSwitchToggle;
