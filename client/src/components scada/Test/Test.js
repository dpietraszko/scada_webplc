import React from "react";
// import styled, { css, keyframes } from "styled-components";

/* AWP_In_Variable Name='"Output_0"' */

const Test = (props) => {
  const { value } = props;

  return (
    <div>
      <form>
        <input type="submit" value="Set Output_0"></input>
        <input type="hidden" name='"Output_0"' value="1"></input>
      </form>
      <form>
        <input type="submit" value="Reset Output_0"></input>
        <input type="hidden" name='"Output_0"' value="0"></input>
      </form>
    </div>
  );
};

export default Test;
