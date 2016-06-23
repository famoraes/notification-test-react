import { FETCH_NOTIFICATIONS, UPDATE_NOTIFICATION } from '../actions/index'

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_NOTIFICATIONS:
      return [action.payload, ...state];
    case UPDATE_NOTIFICATION:
      let newState = state.filter((obj) => {
        if (obj.id != action.payload.id) return obj;
      });

      return [action.payload, ...newState];
  }

  return state
}
