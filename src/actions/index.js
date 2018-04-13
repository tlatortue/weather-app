import axios from 'axios';

require('dotenv').config();

// Key for our weather API : process.env.WEATHER_KEY;

const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${process.env.WEATHER_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request,
    }
}