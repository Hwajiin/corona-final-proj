import { useState, useEffect } from "react";
import getCurrentGeolocation, {
  GeoError,
  GeoSuccess,
} from "../service/get-current-pos";
import makeKakaoMapAxiosInstance from "../service/apis/request-address";

const useGeoData = () => {
  const [geoData, setGeoData] = useState([]);

  const geoSuccess: GeoSuccess = async (position) => {
    const kakaoMapAxiosInstance = makeKakaoMapAxiosInstance(position);

    const res = await kakaoMapAxiosInstance.get(
      "/v2/local/geo/coord2address.json"
    );

    const {
      data: { documents },
    } = res;

    const {
      address: { region_1depth_name },
    } = documents[0];

    setGeoData(region_1depth_name);
  };

  const geoError: GeoError = (error) => {
    alert(`Error occured. Error code: ${error.code}`);
  };

  useEffect(() => {
    getCurrentGeolocation(geoSuccess, geoError);
  }, []);

  return geoData;
};

export default useGeoData;
