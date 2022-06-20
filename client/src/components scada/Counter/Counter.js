import React, { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled, { css } from "styled-components";

const Counter = (time, start) => {
  const [counter, setCounter] = useState(time);

  useEffect(() => {
    const id = setInterval(() => {
      if (start == 1 && counter > 0) {
        setCounter((value) => value - 1);
      } else if (start == 0 && counter >= 0) {
        setCounter(time);
      }
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [start, counter]);

  return counter;
};

export default Counter;
