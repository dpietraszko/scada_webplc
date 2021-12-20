import React from "react";
import styled, { css } from "styled-components";

const Dropdown = (props) => {
  const { dataDropdwon, setGender, progress, setProgress } = props;

  const { name, item } = dataDropdwon;

  const handleClick = (action) => {
    if (!action) return;

    setGender(action);
    if (name === "Gender") {
      setProgress(progress + 12);
    }

    if (props.onClick) props.onClick(action);
  };

  return (
    <StyledUl>
      <DropDownLi>
        <StyledA>{name} </StyledA>
        <DropDownContent>
          {" "}
          {item.map((name) => {
            return <SubA onClick={() => handleClick(`${name}`)}>{name}</SubA>;
          })}
        </DropDownContent>
      </DropDownLi>
    </StyledUl>
  );
};

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 10px;
  overflow: hidden;
  background-color: #333;
  padding: 0px;
  border-radius: 12px;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  box-shadow: 5px 5px 6px #cccccc, -5px -5px 6px #ffffff;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 2px;
  color: #0087ff;
  cursor: pointer;
  width: 120px;
  height: 40px;
`;

const StyledLi = styled.li`
  float: left;
  height: 100%;
  padding: 10px 10px 0 10px;
  &:hover {
    border-radius: 12px;
    background: #ffffff;
    box-shadow: inset 5px 5px 8px #c4c4c4, inset -5px -5px 8px #ffffff;
    border: none;
  }
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  min-width: 160px;
  z-index: 1;
`;

const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover ${DropDownContent} {
    display: block;
  }
`;

const StyledA = styled.a`
  text-align: center;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
`;

const SubA = styled(StyledA)`
  text-decoration: none;
  display: block;
  text-align: left;
  border-radius: 10px;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  box-shadow: 5px 5px 6px #cccccc, -5px -5px 6px #ffffff;
  padding: 10px;
  &:hover {
    border-radius: 10px;
    background: #ffffff;
    box-shadow: inset 5px 5px 8px #c4c4c4, inset -5px -5px 8px #ffffff;
  }
`;

export default Dropdown;
