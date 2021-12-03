import axios from 'axios'
import {apiK} from "./key.js"

export const getLocationInit = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/weather',
    params:{
        APPID: apiK.apiKey,
        units: 'metric'
    },
    
})