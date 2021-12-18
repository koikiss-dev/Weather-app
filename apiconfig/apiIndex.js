import axios from "axios";

export const getLocationCoords = axios.create({
  baseURL: "/api/coords",
  headers: {
    Accept: "aplication/json",
  },
});
export const getLocationName = axios.create({
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
});
