import React from "react";
import styled from "styled-components";

const SContainer = styled.div`
  width: 100%;
  padding: 0;
  margin: 0 auto;
`;

const Container: React.FC = ({ children }) => {
  return <SContainer>{children}</SContainer>;
};

export default Container;
