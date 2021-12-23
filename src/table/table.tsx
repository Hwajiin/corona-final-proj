import React from "react";
import styled from "styled-components";
import responsive from "../base/constants/responsive";
import Spinner from "../components/spinner";
import { CovidDataType } from "../layouts/sidoCovid";
import Body from "./body";
import Head from "./head";

interface TableProps {
  sidoCovidDataOfToday: CovidDataType[];
}

const STable = styled.table`
  width: 100%;
  border-collapse: collapse;

  ${responsive.device["above-tablet"]} {
    width: 80%;
  }
`;

const Table: React.FC<TableProps> = ({ sidoCovidDataOfToday }) => {
  const bodyData = sidoCovidDataOfToday
    ?.filter((item) => item.gubun !== "합계")
    .sort((a, b) => (a.defCnt > b.defCnt ? -1 : 1));

  return bodyData ? (
    <STable>
      <Head headLabels={["위치", "누적확진", "신규확진"]} />
      <Body bodyData={bodyData} />
    </STable>
  ) : (
    <Spinner />
  );
};

export default Table;
