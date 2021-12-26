import React from "react";
import styled from "styled-components";
import flexbox from "../base/mixins/flexbox";
import TotalDefChart from "../charts/totalDefChart";
import Criteria from "../components/criteria";
import Section from "../components/section";
import Spinner from "../components/spinner";
import { CovidDataType } from "./sidoCovid";

interface DefCntOfWeekProps {
  weekCovidData: CovidDataType[] | undefined;
}

const ContentBox = styled.div`
  width: 100%;
  height: 350px;
  ${flexbox()}
`;

const DefCntOfWeek: React.FC<DefCntOfWeekProps> = ({ weekCovidData }) => {
  const totalDefCntOfWeekData = weekCovidData?.filter(
    (item) => item.gubun === "합계"
  );

  const stdDay = weekCovidData && weekCovidData[0].stdDay;

  return (
    <Section title="최근 7일 확진자 발생 추이">
      <Criteria stdDay={stdDay} unit="명" />

      <ContentBox>
        {totalDefCntOfWeekData ? (
          <TotalDefChart totalDefCntOfWeekData={totalDefCntOfWeekData} />
        ) : (
          <Spinner />
        )}
      </ContentBox>
    </Section>
  );
};

export default DefCntOfWeek;
