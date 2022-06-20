import React, { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled, { css } from "styled-components";

const CountUpDownTank = (level = 0, input_1 = 0, input_2 = 0, output_1 = 0) => {
  const [value, setValue] = useState(level);

  useEffect(() => {
    const id = setInterval(() => {
      if (
        (input_1 == 1 && input_2 == 0 && output_1 == 0) ||
        (input_1 == 0 && input_2 == 1 && output_1 == 0)
      ) {
        setValue((oldValue) => {
          const newValue = oldValue + 1;

          if (newValue === 100) {
            clearInterval(id);
          }
          return newValue;
        });
      } else if (input_1 == 1 && input_2 == 1 && output_1 == 0) {
        setValue((oldValue) => {
          const newValue = oldValue + 2;

          if (newValue === 100) {
            clearInterval(id);
          }
          return newValue;
        });
      } else if (output_1 == 1) {
        setValue((oldValue) => {
          const newValue = oldValue - 3;

          if (newValue === 100) {
            clearInterval(id);
          }
          return newValue;
        });
      }
    }, 200);
    return () => {
      clearInterval(id);
    };
  }, [input_1, input_2, output_1]);

  return value;
};

export default CountUpDownTank;
