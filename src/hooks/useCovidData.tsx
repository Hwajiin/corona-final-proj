import React, { useEffect, useState } from "react";
import makeOpenApiAxiosInstance from "../service/apis/request-covid-data";
import generateDate from "../service/generateDate";

const covid19GenAgeInstance = makeOpenApiAxiosInstance();
const covid19SidoInstance = makeOpenApiAxiosInstance(generateDate(6));

const useCovidData = () => {
  const [covidData, setCovidData] = useState({});

  const getRequest = async () => {
    try {
      const [genAgeData, sidoData] = await Promise.all([
        covid19GenAgeInstance.get("/getCovid19GenAgeCaseInfJson"),
        covid19SidoInstance.get("/getCovid19SidoInfStateJson"),
      ]);

      const {
        data: {
          response: {
            body: {
              items: { item: genAgeArray },
            },
          },
        },
      } = genAgeData;

      const {
        data: {
          response: {
            body: {
              items: { item: sidoArray },
            },
          },
        },
      } = sidoData;

      setCovidData({ genAgeArray, sidoArray });
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
