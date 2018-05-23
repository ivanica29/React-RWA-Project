import { put, call } from "redux-saga/effects";

import axios from "axios";
import { setCurrentTemp, fiveDays } from "../reducers/reducer_city";

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?id=`;
  const API_KEY = '889b758ec5c74fa3a1bdc4165b4ce65b';

export function* fetchCitySaga(action) {
  try {
    const response = yield axios.get('/dist/json/city.list.json', {
      transformResponse: (req) => {
        return req
      },
      responseType: 'json'
    });

    let foundCity = response.data.filter((city) => {
      return city.name === action.payload
    });

    let ID = foundCity[0].id;

    let url = `${ROOT_URL}${ID}&APPID=${API_KEY}`;

    const responseWeather = yield axios.get(url);

    let currentTemp = responseWeather.data.list[0].main.temp;
    let rounded = Math.round(currentTemp - 273);

    yield put(setCurrentTemp(rounded));

    console.log(responseWeather);


    let weatherFiveDays = responseWeather.data.list.filter( (item) => {
      if(item.dt_txt.search("12:00") > -1) {
        return true;
      }
    });

    yield put(fiveDays(weatherFiveDays));

  } catch (e) {
    console.log(e.toString());
  }
}