import { takeEvery } from "redux-saga/effects";

import {  FETCH_CITY} from '../reducers/reducer_city';
import { FETCH_START_CITY} from "../reducers/reducer_start_city";

import { fetchCitySaga }from './city';
import { fetchStartCity } from './startCity';

export function* watchWeather() {
  yield takeEvery(FETCH_CITY, fetchCitySaga);
  yield takeEvery(FETCH_START_CITY, fetchStartCity);
}
