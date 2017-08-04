import * as types from './action-types';
import axios from 'axios';

const API_KEY = '8df2dfd624f698509c62395999680385';
const url = `http://api.openweathermap.org/data/2.5/weather?q=Cherkasy&units=metric&appid=${API_KEY}`;

export default {
  fetchWeather() {
    const request = axios.get(url);

    return (dispatch) => {
      request.then(({data}) => {
        dispatch({
          type: types.FETCH_WEATHER,
          payload: {city: data.name, temp: data.main.temp},
        });
      });
    };
  },
};



