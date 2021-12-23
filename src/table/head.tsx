import React from "react";
import styled from "styled-components";
import colors from "../base/constants/colors";
import whitespace from "../base/constants/whitespace";

interface HeadProps {
  headLabels: string[];
}

const THead = styled.thead`
  background-color: ${colors.variable["blue-light"]};
  color: ${colors.variable.white};
`;

const Tr = styled.tr``;

const Th = styled.th`
  padding: ${whitespace.padding.sm}px 0;
  border-top: 1px solid ${colors.variable.gray};
  border-bottom: 1px solid ${colors.variable.gray};
`;

const Head: React.FC<HeadProps> = ({ headLabels }) => {
  return (
    <THead>
      <Tr>
        {headLabels.map((label, idx) => (
          <Th key={idx}>{label}</Th>
        ))}
      </Tr>
    </THead>
  );
};

export default Head;
