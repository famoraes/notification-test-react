import { combineReducers } from 'redux';
import Notifications from './notifications';

const rootReducer = combineReducers({
  notifications: Notifications
});

export default rootReducer;
