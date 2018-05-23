import Immutable from 'seamless-immutable';
import { createAction, handleActions } from 'redux-actions';

// CONSTANTS
export const FETCH_CITY = '@reducer_city/FETCH_CITY';
export const FIVE_DAYS = '@reducer_city/FIVE_DAYS';
export const SET_CURRENT_TEMP = '@reducer_city/SET_CURRENT_TEMP';


// ACTIONS
export const fetchCity = createAction(FETCH_CITY);
export const fiveDays = createAction(FIVE_DAYS);
export const setCurrentTemp = createAction(SET_CURRENT_TEMP);


// INITIAL STATE OF REDUCER
export const INITIAL_STATE = Immutable({
  cityName: "",
  weatherFiveDays: [],
  currentTemp: 0,
});

// IMPLEMENTATION OF ACTIONS
export default handleActions({

  [FETCH_CITY](state = [], { payload } ) {
    return state.merge({
      cityName: payload
    })
  },

  [FIVE_DAYS](state = [], { payload } ) {
    console.log(payload);
    return state.merge({
      weatherFiveDays: payload
    })
  },

  [SET_CURRENT_TEMP](state = [], { payload } ) {
    console.log(payload);
  return state.merge({
    currentTemp: payload
  })
},
}, INITIAL_STATE);