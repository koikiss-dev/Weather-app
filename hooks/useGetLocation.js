import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import useLocalStorage from "use-local-storage";
import { getLocation } from "../apiconfig/apiIndex";
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
      const { data } = await getLocation({
        params: {
          lat: latitud,
          lon: lon,
          units: "metric",
        },
      });
      const resultData = await data;
      setData([resultData]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);
  const getCountry = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await getLocation({
        params: {
          q: value,
          units: "metric",
        },
      });
      const result = data;
      setData([result]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [value]);

  useEffect(() => {
    if (value !== "") {
      getCountry();
    } else {
      getData(lat, lng);
    }
    setInterval(ubicacion, 2000);
  }, [lat, lng, value]);

  return [data, value, loading, lat, lng, pushData, getData];
};

export default useGetLocation;
