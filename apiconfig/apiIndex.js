import axios from 'axios'
import {apikey} from "./key.json"
export const getLocationInit = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/weather',
    params:{
        APPID: apikey,
        units: 'metric'
    },
})