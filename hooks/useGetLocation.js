import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import useLocalStorage from "use-local-storage";
import {
  getLocationCoords,
  getLocationName,
  getLastday,
} from "../apiconfig/apiIndex";
const useGetLocation = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [lat, setLat] = useLocalStorage("lat", "");
  const [lng, setLng] = useLocalStorage("lng", "");
  const [loading, setLoading] = useState(false);
  const ubicacion = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        setLat(lat);
        setLng(lng);
      });
    } else {
      alert("Please activate location");
    }
  };
  const pushData = (e) => {
    setValue(e.target.value);
  };
  const getData = useCallback(async (latitud, lon) => {
    try {
      setLoading(true);
      const { data } = await getLocationCoords({
        params: {
          lat: latitud,
          lon: lon,
        },
      });
      const resultData = await data.data;
      setData([resultData]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);
  const get = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await getLocationName({
        params: {
          q: value,
        },
      });
      const result = data.data;
      setData([result]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [value]);

  const getForecast = async () => {
    try {
      const { data } = await getLastday({
        params: {
          q: "london",
        },
      });
      const result = await data.data;
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (value !== "") {
      get();
    } else {
      getData(lat, lng);
    }
    getForecast;
    setInterval(ubicacion, 2000);
  }, [getData, lat, lng, value]);

  return [data, value, loading, lat, lng, pushData, getData];
};

export default useGetLocation;
