import { combineReducers } from 'redux';
import City from './reducer_city';

const rootReducer = combineReducers({
  city: City
});

export default rootReducer;
