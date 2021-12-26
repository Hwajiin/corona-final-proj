import React from "react";
import styled from "styled-components";
import colors from "../base/constants/colors";
import fonts from "../base/constants/fonts";
import flexbox from "../base/mixins/flexbox";
import Criteria from "../components/criteria";
import Section from "../components/section";
import Spinner from "../components/spinner";

export type CovidDataType = {
  createDt: string;
  stdDay: string;
  gubun: string;
  incDec: number;
  defCnt: number;
};

interface SidoCovidProps {
  sidoCovidData: CovidDataType[];
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

const SidoCovid: React.FC<SidoCovidProps | undefined> = ({ sidoCovidData }) => {
  let latestSidoCovidData;
  if (sidoCovidData) {
    latestSidoCovidData = sidoCovidData[0];
  }

  return (
    <Section title="지역 발생현황">
      <Criteria stdDay={latestSidoCovidData?.stdDay} unit="명" />
      <ContentBox>
        {latestSidoCovidData ? (
          <>
            <Geo>{latestSidoCovidData.gubun}</Geo>
            <DList>
              <Div>
                <Dt>누적확진자</Dt>
                <Dd>{latestSidoCovidData.defCnt.toLocaleString()}</Dd>
              </Div>
              <Div>
                <Dt>신규확진자</Dt>
                <Dd>
                  <strong>
                    {latestSidoCovidData.incDec.toLocaleString()} &#9650;
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

export default SidoCovid;
