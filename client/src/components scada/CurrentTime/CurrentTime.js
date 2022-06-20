import React from "react";
import styled, { css, keyframes } from "styled-components";

const useCurrentCallback = (callback) => {
  const reference = React.useRef();
  reference.current = callback;
  return (...args) => {
    return reference.current(...args);
  };
};

const CurrentTime = () => {
  const [time, setTime] = React.useState(0);
  const currentCallback = useCurrentCallback(() => {
    const date = new Date();
    const finalDate = date.toISOString().split('T')[0]+' '+date.toTimeString().split(' ')[0];
    setTime(finalDate);
  });
  React.useEffect(() => {
    const handle = setInterval(currentCallback, 100);
    return () => clearInterval(handle);
  }, []);
  return <Time>{time}</Time>;
};

const Time = styled.div`
  text-align: center;
  color: #0087ff;
  margin: 2px 0 20px 0;
  font-size: 21px;
`;

export default CurrentTime;
