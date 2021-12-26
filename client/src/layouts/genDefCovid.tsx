import React from "react";
import styled from "styled-components";
import flexbox from "../base/mixins/flexbox";
import GenDefChart from "../charts/genDefChart";
import Criteria from "../components/criteria";
import Section from "../components/section";
import Spinner from "../components/spinner";

export type GenAgeDataType = {
  gubun: string;
  confCaseRate: number | string;
  deathRate: number | string;
  createDt: string;
};

export interface GenCovidProps {
  genAgeCovidData: GenAgeDataType[];
}

const ContentBox = styled.div`
  width: 100%;
  height: 350px;
  ${flexbox()}
`;

const GenDefCovid: React.FC<GenCovidProps> = ({ genAgeCovidData }) => {
  const genCovidData = genAgeCovidData?.filter(
    (item) => item.gubun === "여성" || item.gubun === "남성"
  );

  const today = new Date();
  const stdDay = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;

  return (
    <Section title="성별 확진자 현황">
      <Criteria stdDay={stdDay} unit="%" />
      <ContentBox>
        {genCovidData ? (
          <GenDefChart genCovidData={genCovidData} />
        ) : (
          <Spinner />
        )}
      </ContentBox>
    </Section>
  );
};

export default GenDefCovid;
