import React from "react";
import styled from "styled-components";
import colors from "../base/constants/colors";
import whitespace from "../base/constants/whitespace";
import { CovidDataType } from "../layouts/sidoCovid";

interface BodyProps {
  bodyData: CovidDataType[];
}

const TBody = styled.tbody`
  text-align: center;
`;

const Tr = styled.tr``;

const Td = styled.td`
  padding: ${whitespace.padding.sm}px 0;
  border-bottom: 1px solid ${colors.variable.gray};

  &:nth-child(3) {
    color: ${colors.variable.red};
  }
`;

const Body: React.FC<BodyProps> = ({ bodyData }) => {
  return (
    <TBody>
      {bodyData.map((item, idx) => {
        return (
          <Tr key={idx}>
            <Td>{item.gubun}</Td>
            <Td>{item.defCnt.toLocaleString()}</Td>
            <Td>{item.incDec.toLocaleString()} &#9650;</Td>
          </Tr>
        );
      })}
    </TBody>
  );
};

export default Body;
