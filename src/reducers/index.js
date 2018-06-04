import { combineReducers } from 'redux';
import City from './reducer_city';
import StartCity from './reducer_start_city';

const rootReducer = combineReducers({
  city: City,
  startCity: StartCity
});

export default rootReducer;
