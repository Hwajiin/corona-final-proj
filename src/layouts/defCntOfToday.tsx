import React from "react";
import styled from "styled-components";
import fonts from "../base/constants/fonts";
import flexbox from "../base/mixins/flexbox";
import Criteria from "../components/criteria";
import Section from "../components/section";
import Spinner from "../components/spinner";
import { CovidDataType } from "./sidoCovid";

interface DefCntOfTodayProps {
  todayCovidData: CovidDataType[];
}

const ContentBox = styled.div`
  ${flexbox("flex-start")}
`;

const Geo = styled.p`
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.xl};
`;

const DataBox = styled.div`
  ${flexbox()}
`;

const DefCntOfToday: React.FC<DefCntOfTodayProps> = ({ todayCovidData }) => {
  const nationCovidDataOfToday = todayCovidData?.filter(
    (item) => item.gubun === "합계"
  );

  return (
    <Section title="전국 발생현황">
      <Criteria
        stdDay={nationCovidDataOfToday && nationCovidDataOfToday[0].stdDay}
        unit="명"
      />
      {nationCovidDataOfToday ? (
        <ContentBox>
          <Geo>전국</Geo>
          <DataBox>
            <p>
              누적확진자:
              <strong>
                {nationCovidDataOfToday[0].defCnt.toLocaleString()}
              </strong>
            </p>
            <p>
              신규확진자:{" "}
              <strong>
                {nationCovidDataOfToday[0].incDec.toLocaleString()}
              </strong>
            </p>
          </DataBox>
        </ContentBox>
      ) : (
        <Spinner />
      )}
    </Section>
  );
};

export default DefCntOfToday;
