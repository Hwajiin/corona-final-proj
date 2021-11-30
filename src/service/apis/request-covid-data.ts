import axios from "axios";
import generateTodayDate from "../generateDate";

const date = generateTodayDate();

export interface AxiosConfig {
  baseURL: string;
  params: object;
  headers?: any;
}

// covid19 시·도발생 및 연령별·성별감염 현황에 관한 axios instance
const openApiConfig: AxiosConfig = {
  baseURL: "http://openapi.data.go.kr/openapi/service/rest/Covid19",
  params: {
    serviceKey: process.env.REACT_APP_OPEN_API_KEY,
    pageNo: 1,
    numOfRows: 10,
    startCreateDt: date,
    endCreateDt: date,
  },
};

const openApiAxiosInstance = axios.create(openApiConfig);

export default openApiAxiosInstance;
