import React from "react";
import styled, { keyframes } from "styled-components";
import colors from "../base/constants/colors";

const Spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 7px solid ${colors.variable["blue-dark"]};
  border-top: 7px solid ${colors.variable.white};
  animation: ${Spin} 800ms infinite linear;
`;

const Spinner = () => {
  return <Circle></Circle>;
};

export default Spinner;
