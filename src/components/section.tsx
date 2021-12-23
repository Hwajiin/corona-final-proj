import React from "react";
import styled from "styled-components";
import fonts from "../base/constants/fonts";

interface SectionProps {
  title: string;
}

const SSection = styled.section``;

const Title = styled.h2`
  font-size: ${fonts.size.md};
  margin-bottom: 5px;
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
