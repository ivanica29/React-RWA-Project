import Immutable from 'seamless-immutable';
import { createAction, handleActions } from 'redux-actions';

// CONSTANTS
export const FETCH_CITY = '@reducer_city/FETCH_CITY';
export const FIVE_DAYS = '@reducer_city/FIVE_DAYS';
export const SET_CURRENT_TEMP = '@reducer_city/SET_CURRENT_TEMP';
export const SET_CURRENT_DESCRIPTION = '@reducer_city/SET_CURRENT_DESCRIPTION';
export const SET_ICON = '@reducer/SET_ICON';


// ACTIONS
export const fetchCity = createAction(FETCH_CITY);
export const fiveDays = createAction(FIVE_DAYS);
export const setCurrentTemp = createAction(SET_CURRENT_TEMP);
export const setCurrentDescription = createAction(SET_CURRENT_DESCRIPTION);
export const setIcon = createAction(SET_ICON);


// INITIAL STATE OF REDUCER
export const INITIAL_STATE = Immutable({
  cityName: "",
  weatherFiveDays: [],
  currentTemp: 0,
  currentDescription: "",
  icon: ""
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

}, INITIAL_STATE);