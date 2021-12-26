import { useEffect, useState } from "react";
import makeOpenApiAxiosInstance from "../service/apis/request-covid-data";
import generateDate from "../service/generateDate";

const covid19GenAgeInstance = makeOpenApiAxiosInstance();
const covid19SidoInstance = makeOpenApiAxiosInstance(generateDate(6));

const useCovidData = () => {
  const [covidData, setCovidData] = useState({});

  const getRequest = async () => {
    try {
      const res = await Promise.all([
        covid19GenAgeInstance.get("/gen-age"),
        covid19SidoInstance.get("/sido"),
      ]);

      const [genAgeData, sidoData] = res.map((item) => {
        return item.data;
      });

      setCovidData({ genAgeData, sidoData });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRequest();
  }, []);

  return covidData;
};

export default useCovidData;
