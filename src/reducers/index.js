import { combineReducers } from 'redux';
import appointmentReducer from './appointmentReducer';
import appModalReducer from './appModalReducer';

export default combineReducers({
  appointmentReducer,
  appModalReducer,
});