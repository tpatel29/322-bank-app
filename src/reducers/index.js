import { combineReducers } from 'redux';

import characterReducer from './characterReducer';
import accountReducer from "./accountReducer";
export default combineReducers({
  characters: characterReducer,
  accounts: accountReducer,

});
