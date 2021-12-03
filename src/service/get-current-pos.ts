// 현재 사용자 위치를 가져오는 함수
export type GeoSuccess = (position: GeolocationPosition) => void;
export type GeoError = (error: GeolocationPositionError) => void;

const geoOptions = {
  maximumAge: 5 * 60 * 1000,
  timeout: 10 * 1000,
};

const getCurrentGeolocation = (geoSuccess: GeoSuccess, geoError: GeoError) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
  } else {
    console.log(`Geolocation is not supported for this Browser/OS.`);
  }
};

export default getCurrentGeolocation;
