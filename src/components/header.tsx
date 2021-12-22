import React from "react";
import styled from "styled-components";
import colors from "../base/constants/colors";
import fonts from "../base/constants/fonts";
import responsive from "../base/constants/responsive";
import whitespace from "../base/constants/whitespace";
import flexbox from "../base/mixins/flexbox";
import Col from "../layouts/grids/col";
import Container from "../layouts/grids/container";
import Row from "../layouts/grids/row";

const SHeader = styled.header`
  height: 70px;
  background-color: ${colors.variable.blue};
  ${flexbox()}
`;

const Title = styled.h1`
  display: inline-block;
  color: ${colors.variable.white};
  font-size: ${fonts.size.lg};
  font-weight: 600;
  margin-left: ${whitespace.padding.lg}px;

  ${responsive.device["above-tablet"]} {
    margin-left: 0px;
    font-size: ${fonts.size.xl};
  }
`;

const Header = () => {
  return (
    <SHeader>
      <Container>
        <Row>
          <Col sm={4}>
            <Title>코로나바이러스감염증-19(COVID-19)</Title>
          </Col>
        </Row>
      </Container>
    </SHeader>
  );
};

export default Header;
