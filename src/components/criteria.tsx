import React from "react";
import styled from "styled-components";
import fonts from "../base/constants/fonts";

interface CriteriaProps {
  stdDay: string | undefined;
  unit?: string;
}

const SCriteria = styled.p`
  font-size: ${fonts.size.sm};
  margin-bottom: 15px;
`;

const Criteria: React.FC<CriteriaProps> = ({ stdDay, unit }) => {
  return (
    <SCriteria>
      &#40;{`${stdDay ? stdDay : "-"} 기준${unit && `, 단위: ${unit}`}`}&#41;
    </SCriteria>
  );
};

export default Criteria;
