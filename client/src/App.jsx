import GlobalStyle from "./base/globalStyle";
import styled from "styled-components";
import useCovidData from "./hooks/useCovidData";
import useGeoData from "./hooks/useGeoData";
import useGeoCovidData from "./hooks/useGeoCovidData";
import Header from "./components/header";
import Container from "./layouts/grids/container";
import Row from "./layouts/grids/row";
import Col from "./layouts/grids/col";
import SidoCovid from "./layouts/sidoCovid";
import DefCntOfWeek from "./layouts/defCntOfWeek";
import DefCntOfToday from "./layouts/defCntOfToday";
import GenDefCovid from "./layouts/genDefCovid";
import SidoCovidTable from "./layouts/sidoCovidTable";

const SApp = styled.div`
  width: 100%;
`;

const Main = styled.main`
  margin: 30px 0;
`;

const App = () => {
  const { genAgeData: genAgeArray, sidoData: sidoArray } = useCovidData();

  const geoData = useGeoData();

  const geoCovidData = useGeoCovidData(sidoArray, geoData);

  const GUBUN_CNT = 19;

  const defCntOfTodayData = sidoArray?.slice(0, GUBUN_CNT);

  return (
    <SApp>
      <Header />
      <Main>
        <Container>
          <Row>
            <Col sm={4} md={6}>
              <SidoCovid sidoCovidData={geoCovidData} />
            </Col>
            <Col sm={4} md={6}>
              <DefCntOfToday todayCovidData={defCntOfTodayData} />
            </Col>
          </Row>
          <Row>
            <Col sm={4} md={6}>
              <DefCntOfWeek weekCovidData={sidoArray} />
            </Col>
            <Col sm={4} md={6}>
              <GenDefCovid genAgeCovidData={genAgeArray} />
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <SidoCovidTable todayCovidData={defCntOfTodayData} />
            </Col>
          </Row>
        </Container>
      </Main>
      <GlobalStyle />
    </SApp>
  );
};

export default App;
