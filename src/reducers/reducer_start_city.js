import Immutable from 'seamless-immutable';
import { createAction, handleActions } from 'redux-actions';
import {FETCH_CITY} from "./reducer_city";

export const FETCH_START_CITY = '@reducer_start_city/FETCH_START_CITY';
export const SET_TEMP_START_CITIES = '@reducer_start_city/SET_TEMP_START_CITIES';
export const SET_DESC_START_CITIES = '@reducer_start_city/SET_DESC_START_CITIES';
export const SET_ICON_START_CITIES = '@reducer_start_city/SET_ICON_START_CITIES';

export const fetchStartCity = createAction(FETCH_START_CITY);
export const setTempStartCities = createAction(SET_TEMP_START_CITIES);
export const setDescStartCities = createAction(SET_DESC_START_CITIES);
export const setIconStartCities = createAction(SET_ICON_START_CITIES);

export const INITIAL_STATE = Immutable({
  tempStartCities: [],
  descStartCities: [],
  iconsStartCities: [],
});

export default handleActions({

  [FETCH_START_CITY](state = [], { payload } ) {
    return state.merge({
    })
  },

  [SET_TEMP_START_CITIES](state = [], { payload } ) {
    return state.merge({
      tempStartCities: payload
    })
  },

  [SET_DESC_START_CITIES](state = [], { payload } ) {
    return state.merge({
      descStartCities: payload
    })
  },

  [SET_ICON_START_CITIES](state = [], { payload } ) {
    return state.merge({
      iconsStartCities: payload
    })
  },



}, INITIAL_STATE);
