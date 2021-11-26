import React from "react";
import styled from "styled-components";
import responsive from "../../base/constants/responsive";

export interface ColProps {
  sm?: number;
  md?: number;
  lg?: number;
}

const grids = (props: ColProps) => {
  if (props.sm) {
    return `
        width: ${(props.sm / responsive.columns.sm) * 100}%; 
    `;
  }

  if (props.md) {
    return `
        ${responsive.device["above-tablet"]} {
            max-width: ${responsive["max-container-size"].md};
            padding: 0 ${responsive.margin.md};
            width: ${(props.md / responsive.columns.md) * 100}%; 
        }
        
    `;
  }

  if (props.lg) {
    return `
        ${responsive.device["above-desktop"]} {
            max-width: ${responsive["max-container-size"].lg};
            padding: 0;
            width: (${responsive.unit.lg} + ${responsive.gutter} ) * ${props.lg}px; 
        }
        
    `;
  }
};

const SCol = styled.div<ColProps>`
  background-color: pink;
  ${(props) =>
    props.sm ? `width: ${(props.sm / responsive.columns.sm) * 100}%; ` : null}

  ${(props) =>
    props.md
      ? `${responsive.device["above-tablet"]} {
                max-width: ${responsive["max-container-size"].md}px;
                padding: 0 ${responsive.margin.md}px;
                width: ${(props.md / responsive.columns.md) * 100}%; 
            } `
      : null}

    ${(props) =>
    props.lg
      ? `${responsive.device["above-desktop"]} {
        max-width: ${responsive["max-container-size"].lg}px;
        padding: 0;
        width: ${(responsive.gutter + responsive.unit.lg) * props.lg}px;
    }`
      : null}
`;

const Col: React.FC<ColProps> = (props) => {
  const { sm, md, lg } = props;
  console.log(lg);

  return sm || md || lg ? (
    <SCol sm={sm} md={md} lg={lg}>
      {props.children}
    </SCol>
  ) : null;
};

export default Col;
