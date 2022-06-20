import React, { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled, { css } from "styled-components";

const CountUpDownPipe = (level = 0, input_1 = 0, min = 0, max = 100) => {
  const [counter, setCounter] = useState(level);

  useEffect(() => {
    const id = setInterval(() => {
      if (input_1 == 1 && counter >= min && counter < max) {
        setCounter((value) => value + 100);
      } else if (input_1 == 0 && counter >= min + 10 && counter <= max) {
        setCounter((value) => value - 100);
      }
    }, 100);
    return () => {
      clearInterval(id);
    };
  }, [input_1, counter]);

  return counter;
};

export default CountUpDownPipe;
