import axios from 'axios';

const API_KEY = 'fd0b681da1715dd44cf7ebb744629675';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather( city ) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get( url );

    console.log( 'Request:', request );

    return {
        type: 'FETCH_WEATHER',
        payload: request
    };
}