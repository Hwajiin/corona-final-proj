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
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      default:
        alert("An unknown error occurred.");
    }
  };

  useEffect(() => {
    getCurrentGeolocation(geoSuccess, geoError);
  }, []);

  return geoData;
};

export default useGeoData;
