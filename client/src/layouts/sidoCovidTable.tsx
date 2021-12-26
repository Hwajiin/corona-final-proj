import React from "react";
import styled from "styled-components";
import flexbox from "../base/mixins/flexbox";
import Criteria from "../components/criteria";
import Section from "../components/section";
import Spinner from "../components/spinner";
import Table from "../table/table";
import { CovidDataType } from "./sidoCovid";

interface SidoCovidTableProps {
  todayCovidData: CovidDataType[] | undefined;
}

const ContentBox = styled.div`
  width: 100%;
  min-height: 100vh;
  ${flexbox()}
`;

const SidoCovidTable: React.FC<SidoCovidTableProps> = ({ todayCovidData }) => {
  return (
    <Section title="지역별 발생 현황">
      <Criteria stdDay={todayCovidData && todayCovidData[0].stdDay} unit="명" />
      <ContentBox>
        {todayCovidData ? (
          <Table sidoCovidDataOfToday={todayCovidData} />
        ) : (
          <Spinner />
        )}
      </ContentBox>
    </Section>
  );
};

export default SidoCovidTable;
