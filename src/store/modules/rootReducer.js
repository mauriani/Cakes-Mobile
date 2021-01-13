import {combineReducers} from 'redux';

import cart from './cart/reducer';
import login from './Login/reducer';

export default combineReducers({
  cart,
  login,
});
