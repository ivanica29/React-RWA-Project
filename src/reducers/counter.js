import Immutable from 'seamless-immutable';
import { createAction, handleActions } from 'redux-actions';

// CONSTANTS
export const INCREMENT_COUNTER = '@counter/INCREMENT_COUNTER';
export const DECREMENT_COUNTER = '@counter/DECREMENT_COUNTER';

// ACTIONS
export const incrementCounter = createAction(INCREMENT_COUNTER);
export const decrementCounter = createAction(DECREMENT_COUNTER);

// INITIAL STATE OF REDUCER
export const INITIAL_STATE = Immutable({
  currentNumber: 0
});

// IMPLEMENTATION OF ACTIONS
export default handleActions({
	
  [INCREMENT_COUNTER](state, { payload }) {
  	return state.merge({
  		currentNumber: state.currentNumber + 1
  	});
  },

  [DECREMENT_COUNTER](state, { payload }) {
    return state.merge({
  		currentNumber: state.currentNumber - 1
  	});
  }

}, INITIAL_STATE);