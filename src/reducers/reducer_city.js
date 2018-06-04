import Immutable from 'seamless-immutable';
import { createAction, handleActions } from 'redux-actions';

// CONSTANTS
export const FETCH_CITY = '@reducer_city/FETCH_CITY';
export const FIVE_DAYS = '@reducer_city/FIVE_DAYS';
export const SET_CURRENT_TEMP = '@reducer_city/SET_CURRENT_TEMP';
export const SET_CURRENT_DESCRIPTION = '@reducer_city/SET_CURRENT_DESCRIPTION';
export const SET_ICON = '@reducer_city/SET_ICON';
export const SET_HOURS = '@reducer_city/SET_HOURS';
export const SET_120H = '@reducer_city/SET_120H';


// ACTIONS
export const fetchCity = createAction(FETCH_CITY);
export const fiveDays = createAction(FIVE_DAYS);
export const setCurrentTemp = createAction(SET_CURRENT_TEMP);
export const setCurrentDescription = createAction(SET_CURRENT_DESCRIPTION);
export const setIcon = createAction(SET_ICON);
export const setHours = createAction(SET_HOURS);
export const setTemp120h = createAction(SET_120H);


// INITIAL STATE OF REDUCER
export const INITIAL_STATE = Immutable({
  cityName: "",
  weatherFiveDays: [],
  currentTemp: 0,
  currentDescription: "",
  icon: "",
  hours: [],
  temp120h: [],
});

// IMPLEMENTATION OF ACTIONS
export default handleActions({

  [FETCH_CITY](state = [], { payload } ) {
    return state.merge({
      cityName: payload
    })
  },

  [FIVE_DAYS](state = [], { payload } ) {
    return state.merge({
      weatherFiveDays: payload
    })
  },

  [SET_CURRENT_TEMP](state = [], { payload } ) {
  return state.merge({
    currentTemp: payload
  })
  },

  [SET_CURRENT_DESCRIPTION](state = [], { payload } ) {
    return state.merge({
      currentDescription: payload
    })
  },

  [SET_ICON](state = [], { payload } ) {
    return state.merge({
      icon: payload
    })
  },

  [SET_HOURS](state = [], { payload } ) {
    return state.merge({
      hours: payload
    })
  },

  [SET_120H](state = [], { payload } ) {
    return state.merge({
      temp120h: payload
    })
  },

}, INITIAL_STATE);