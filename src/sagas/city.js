import { put, call } from "redux-saga/effects";

import axios from "axios";
import { setCurrentTemp, fiveDays, setCurrentDescription , setIcon, setHours, setTemp120h} from "../reducers/reducer_city";

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?id=`;
const API_KEY = '889b758ec5c74fa3a1bdc4165b4ce65b';
const ICON_URL = 'http://openweathermap.org/img/w/';


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


    let iconDesc = responseWeather.data.list[0].weather[0].icon;
    let iconUrl = `${ICON_URL}${iconDesc}.png`;
    yield put(setIcon(iconUrl));

    let currentTemp = responseWeather.data.list[0].main.temp;
    let rounded = Math.round(currentTemp - 273);

    yield put(setCurrentTemp(rounded));

    let currentHour = responseWeather.data.list[0];

    let currentDescription = currentHour.weather[0].description;
    yield put(setCurrentDescription(currentDescription));

    let weatherFiveDays = responseWeather.data.list.filter( (item) => {
      if(item.dt_txt.search("12:00") > -1) {
        return true;
      }
    });
    yield put(fiveDays(weatherFiveDays));

    let timeArray = responseWeather.data.list.map((item) => {
      let time =  item.dt_txt.split(" ")[1];
      return time.slice(0, time.length-3);
    });
    yield put(setHours(timeArray));

    let temp120h = responseWeather.data.list.map((item) => {
      return (Math.round(item.main.temp - 273));
    });
    yield put(setTemp120h(temp120h));

  } catch (e) {
    console.log(e.toString());
  }
}