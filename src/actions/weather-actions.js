import types from './action-types';
import axios from 'axios';

import vars from 'Config/vars';

export default {
  fetchWeather: () => (dispatch) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=Cherkasy&units=metric&appid=${vars.WEATHER_API_KEY}`;
    const request = axios.get(url);
    request.then(({data}) => {
      dispatch({
        type: types.FETCH_WEATHER,
        payload: {city: data.name, temp: data.main.temp},
      });
    });
  },
};