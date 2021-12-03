import { useState, useEffect, useCallback } from "react";
import { getLocationInit } from "../apiconfig/apiIndex";
const useGetLocation = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const ubicacion = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        setLat(lat);
        setLng(lng);
      });
    }
  };
  const pushData = (e) => {
    setValue(e.target.value);
  };
  const getData = useCallback(async (city) => {
    try {
      const { data } = await getLocationInit({
        params: {
          q: city,
        },
      });
      const resultData = data;
      setData([resultData]);
    } catch (error) {
      console.log(error);
    }
  }, []);
  const get = useCallback(async () => {
    try {
      const { data } = await getLocationInit({
        params: {
          lat: lat,
          lon: lng,
        },
      });
      const result = data;
      setData([result]);
    } catch (error) {
      console.log(error);
    }
  }, [lat, lng]);
  useEffect(() => {
    get();
    getData(value);
    ubicacion();
  }, [lat, lng, value, getData, get]);

  return [data, value, lat, lng, pushData, getData, get];
};

export default useGetLocation;
