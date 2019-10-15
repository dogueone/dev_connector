// reducer handles the state (add info from action.payload to the store according to action.type)
import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    // alert will dispatch this type
    case SET_ALERT:
      // this state will passed down to the component
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}
