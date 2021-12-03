import axios from 'axios'
import {key} from "./key"
export const getLocationInit = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/weather',
    params:{
        APPID: key.apiKey,
        units: 'metric'
    },
})