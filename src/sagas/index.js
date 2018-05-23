import { takeEvery, all, takeLatest } from "redux-saga/effects";
import {  FETCH_CITY} from '../reducers/reducer_city';
import { fetchCitySaga }from './city';

export function* watchWeather() {
  yield takeEvery(FETCH_CITY, fetchCitySaga);
}
