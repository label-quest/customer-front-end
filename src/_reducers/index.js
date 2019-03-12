import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { customers } from './customers.reducer';
import { labelstatsjson } from './labelstatsjson.reducer';

const rootReducer = combineReducers({
  authentication,
  users,
  customers,
  labelstatsjson,
  alert,
});

export default rootReducer;