import { useState, useEffect, useCallback } from "react";
import { getLocationInit } from "../apiconfig/apiIndex";
const useGetLocation = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [loading, setLoading] = useState(false)
  const ubicacion = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
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
    async () => {
      try {
        setLoading(true)
        const { data } = await getLocationInit({
          params: {
            lat: lat,
            lon: lng,
          },
        });
        const resultData = data;
        setLoading(false)
        setData([resultData]);
      } catch (error) {
        console.log(error);
      }
    },
    [lat, lng]
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
    setInterval(getData, 6000)
    ubicacion()
    
  }, [lat, lng, value, getData]);

  return [data, value, lat, lng, pushData, getData, loading];
};

export default useGetLocation;
