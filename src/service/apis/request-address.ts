import axios, { AxiosInstance } from "axios";
import { AxiosConfig } from "./request-covid-data";

// 좌표를 주소로 변환하는 kakao Map API URL
export const kakaoMapURL = "/v2/local/geo/coord2address.json";

// 사용자 위치 정보 받아서 axios config instance 만드는 함수
const makeKakaoMapAxiosInstance = (
  position: GeolocationPosition
): AxiosInstance => {
  const { coords } = position;

  const kakaoMapApiConfig: AxiosConfig = {
    baseURL: "https://dapi.kakao.com",
    params: {
      x: coords.longitude,
      y: coords.latitude,
    },
    headers: {
      Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}`,
    },
  };

  return axios.create(kakaoMapApiConfig);
};

export default makeKakaoMapAxiosInstance;
