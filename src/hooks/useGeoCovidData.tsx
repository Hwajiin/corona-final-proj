import { useEffect, useState } from "react";
import { CovidDataType } from "../layouts/sidoCovid";

const useGeoCovidData = (sidoArray: CovidDataType[], geoData: string) => {
  const [geoCovidData, setGeoCovidData] = useState({});

  const getGeoCovidData = () => {
    if (sidoArray && geoData) {
      const data = sidoArray.filter((item) => geoData.includes(item.gubun));

      setGeoCovidData(data);
    }
  };

  useEffect(() => {
    getGeoCovidData();
  }, [sidoArray, geoData]);

  return geoCovidData;
};

export default useGeoCovidData;
