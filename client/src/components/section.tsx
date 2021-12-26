import React from "react";
import styled from "styled-components";
import fonts from "../base/constants/fonts";
import responsive from "../base/constants/responsive";
import whitespace from "../base/constants/whitespace";

interface SectionProps {
  title: string;
}

const SSection = styled.section`
  width: 100%;
  padding: 0 ${whitespace.padding.lg}px;
  margin-bottom: 50px;
`;

const Title = styled.h2`
  font-size: ${fonts.size.md};
  margin-bottom: 5px;

  ${responsive.device["above-tablet"]} {
    font-size: ${fonts.size.lg};
  }
`;

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <SSection>
      <Title>{title}</Title>
      {children}
    </SSection>
  );
};

export default Section;
