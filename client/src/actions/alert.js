// we call action from the component

import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

// dispatch - thunk middleware to able to dispatch mote than 1 action.type
export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};