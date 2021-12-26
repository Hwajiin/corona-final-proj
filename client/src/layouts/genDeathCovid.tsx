import React from "react";
import GenDeathChart from "../charts/genDeathChart";
import Criteria from "../components/criteria";
import Section from "../components/section";
import Spinner from "../components/spinner";
import { GenCovidProps } from "./genDefCovid";

const GenDeathCovid: React.FC<GenCovidProps> = ({ genAgeCovidData }) => {
  const genCovidData = genAgeCovidData?.filter(
    (item) => item.gubun === "여성" || item.gubun === "남성"
  );

  const today = new Date();
  const stdDay = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;

  return (
    <Section title="성별 사망자 현황">
      <Criteria stdDay={stdDay} unit="%" />
      {genCovidData ? (
        <GenDeathChart genCovidData={genCovidData} />
      ) : (
        <Spinner />
      )}
    </Section>
  );
};

export default GenDeathCovid;
