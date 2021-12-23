import React from "react";
import styled from "styled-components";
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
  sidoCovidData: CovidDataType;
}

const ContentBox = styled.div`
  ${flexbox("flex-start")}
`;

const DataBox = styled.div`
  ${flexbox()}
`;

const Geo = styled.p`
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.xl};
`;

const SidoCovid: React.FC<SidoCovidProps | undefined> = ({ sidoCovidData }) => {
  return (
    <Section title="우리지역 발생현황">
      <Criteria stdDay={sidoCovidData && sidoCovidData.stdDay} unit="명" />
      <ContentBox>
        {sidoCovidData ? (
          <>
            <Geo>{sidoCovidData.gubun}</Geo>
            <DataBox>
              <p>
                누적확진자:
                <strong>{sidoCovidData.defCnt.toLocaleString()}</strong>
              </p>
              <p>
                신규확진자:{" "}
                <strong>{sidoCovidData.incDec.toLocaleString()}</strong>
              </p>
            </DataBox>
          </>
        ) : (
          <Spinner />
        )}
      </ContentBox>
    </Section>
  );
};

export default SidoCovid;
