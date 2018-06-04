import { put } from "redux-saga/effects";

import {setTempStartCities, setDescStartCities, setIconStartCities} from "../reducers/reducer_start_city";

import axios from "axios";

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?id=`;
const API_KEY = '889b758ec5c74fa3a1bdc4165b4ce65b';
const ICON_URL = 'http://openweathermap.org/img/w/';

const BG_ID = '792680';
const LD_ID = '2643743';
const RM_ID = '3169070';
const BR_ID = '2950159';

const startCitiesIds = [BG_ID, LD_ID, RM_ID, BR_ID];

export function* fetchStartCity(action) {

  const resForStartCities =  yield startCitiesIds.map(function* (cityId) {
    return yield axios.get(`${ROOT_URL}${cityId}&APPID=${API_KEY}`);
  });


  let tempForStartCities = resForStartCities.map(item => {
    return Math.round(item.data.list[0].main.temp - 273);
  });

  yield put(setTempStartCities(tempForStartCities));


  let descForStartCities = resForStartCities.map(item => {
    return (item.data.list[0].weather[0].description.charAt(0).toUpperCase() + item.data.list[0].weather[0].description.slice(1));
  });

  yield put(setDescStartCities(descForStartCities));

  let iconsForStartCities = resForStartCities.map(item => {
    return (`${ICON_URL}${item.data.list[0].weather[0].icon}.png`)
  });


  yield put(setIconStartCities(iconsForStartCities));


}