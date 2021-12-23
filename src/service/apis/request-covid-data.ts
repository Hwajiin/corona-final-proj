import axios from "axios";
import generateDate from "../generateDate";

export interface AxiosConfig {
  baseURL: string;
  params: object;
  headers?: any;
}

// current date 생성
const date = generateDate();

// covid19 시·도발생 및 연령별·성별감염 현황에 관한 axios instance 만드는 함수
const makeOpenApiAxiosInstance = (
  startCreateDt: string = date,
  endCreateDt: string = date
) => {
  const openApiConfig: AxiosConfig = {
    baseURL: "/openapi/service/rest/Covid19",
    params: {
      serviceKey: process.env.REACT_APP_OPEN_API_KEY,
      pageNo: 1,
      numOfRows: 10,
      startCreateDt,
      endCreateDt,
    },
  };

  return axios.create(openApiConfig);
};

export default makeOpenApiAxiosInstance;
