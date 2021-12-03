import { useState, useEffect, useCallback } from "react";
import useLocalStorage from 'use-local-storage'
import { getLocationInit } from "../apiconfig/apiIndex";
const useGetLocation = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [lat, setLat] = useLocalStorage("lat", "");
  const [lng, setLng] = useLocalStorage("lng", "");
  const [loading, setLoading] = useState(false)
  const ubicacion = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        setLat(lat);
        setLng(lng);
        
      });
    }else{
      
      alert("Please activate location")
    }
  };
  const pushData = (e) => {
    setValue(e.target.value);
  };
  const getData = useCallback(
    async (latitud, lon) => {
      try {
        setLoading(true)
        const { data } = await getLocationInit({
          params: {
            lat: latitud,
            lon: lon,
          },
        });
        const resultData = await data;
        setLoading(false)
        setData([resultData]);
      } catch (error) {
        console.log(error);
      }
    },
    []
  );
  /* const get = useCallback(async () => {
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
  }, [lat, lng]); */
  useEffect(() => {
    /* get(); */
    getData(lat, lng)
    
    setInterval(ubicacion, 2000)
    
    
  }, [getData, lat, lng]);

  return [data, value, lat, lng, pushData, getData, loading];
};

export default useGetLocation;
