import React from "react";
import styled from "styled-components";
import colors from "../base/constants/colors";
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
  width: 100%;
  height: 150px;
  ${flexbox("center", "center", "column")}
  background-color: ${colors.variable.gray};
  border-radius: 5px;
`;

const Geo = styled.p`
  font-weight: ${fonts.weight.bold};
  font-size: 34px;
  margin-bottom: 15px;
`;

const DList = styled.dl``;

const Div = styled.div`
  ${flexbox("flex-start")}
  margin-bottom: 5px;
`;

const Dt = styled.dt`
  &:after {
    content: ":";
    margin-right: 3px;
  }
`;

const Dd = styled.dd`
  strong {
    color: ${colors.variable.red};
  }
`;

const DefCntOfToday: React.FC<DefCntOfTodayProps> = ({ todayCovidData }) => {
  const nationCovidDataOfToday = todayCovidData?.find(
    (item) => item.gubun === "합계"
  );

  return (
    <Section title="전국 발생현황">
      <Criteria
        stdDay={nationCovidDataOfToday && nationCovidDataOfToday.stdDay}
        unit="명"
      />

      <ContentBox>
        {nationCovidDataOfToday ? (
          <>
            <Geo>전국</Geo>
            <DList>
              <Div>
                <Dt>누적확진자</Dt>
                <Dd>{nationCovidDataOfToday.defCnt.toLocaleString()}</Dd>
              </Div>
              <Div>
                <Dt>신규확진자</Dt>
                <Dd>
                  <strong>
                    {nationCovidDataOfToday.incDec.toLocaleString()} &#9650;
                  </strong>
                </Dd>
              </Div>
            </DList>
          </>
        ) : (
          <Spinner />
        )}
      </ContentBox>
    </Section>
  );
};

export default DefCntOfToday;
