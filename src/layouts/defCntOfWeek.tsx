import React from "react";
import TotalDefChart from "../charts/totalDefChart";
import Criteria from "../components/criteria";
import Section from "../components/section";
import Spinner from "../components/spinner";
import { CovidDataType } from "./sidoCovid";

interface DefCntOfWeekProps {
  totalCovidData: CovidDataType[] | undefined;
}

const DefCntOfWeek: React.FC<DefCntOfWeekProps> = ({ totalCovidData }) => {
  const totalDefCntOfWeekData = totalCovidData?.filter(
    (item) => item.gubun === "합계"
  );

  const stdDay = totalCovidData && totalCovidData[0].stdDay;
  const todayDefCntData = totalCovidData && totalCovidData[0].incDec;

  return (
    <Section title="최근 7일 확진자 발생 추이">
      <Criteria stdDay={stdDay} unit="명" />
      {totalDefCntOfWeekData ? (
        <TotalDefChart totalDefCntOfWeekData={totalDefCntOfWeekData} />
      ) : (
        <Spinner />
      )}
    </Section>
  );
};

export default DefCntOfWeek;
