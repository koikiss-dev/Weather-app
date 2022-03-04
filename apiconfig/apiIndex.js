import axios from "axios";

export const getLocation = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5/weather",
  params: {
    APPID: "d2edeca8d612bc0f975e367efabe2392",
  },
});
/* export const getLocationName = axios.create({
  baseURL: "/api/city",
  headers: {
    Accept: "aplication/json",
  },
});

export const getLastday = axios.create({
  baseURL: "/api/lastdays",
  headers: {
    Accept: "aplication/json",
  },
}); */
