import { combineReducers } from 'redux';

import { loginReducer } from './loginReducer';
import { signupReducer } from './signupReducer';
import { valueReducer } from './valueReducer';
import { dataReducer } from './dataReducer';

export default combineReducers({
  loginReducer,
  signupReducer,
  valueReducer,
  dataReducer,
});