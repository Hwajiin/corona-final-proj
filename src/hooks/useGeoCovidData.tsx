import { useEffect, useState } from "react";

const useGeoCovidData = (sidoArray: any[], geoData: string) => {
  const [geoCovidData, setGeoCovidData] = useState({});

  const getGeoCovidData = () => {
    if (sidoArray && geoData) {
      const data = sidoArray.filter((item) => geoData.includes(item.gubun));
      setGeoCovidData(data);
    }
  };

  useEffect(() => {
    getGeoCovidData();
  }, []);

  return geoCovidData;
};

export default useGeoCovidData;
