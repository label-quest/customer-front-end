import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { customers } from './customers.reducer';
import { labelstatsjson } from './labelstatsjson.reducer';
import { overallstatsjson } from './overallstatsjson.reducer';
import { progressjson } from './progressjson.reducer';

const rootReducer = combineReducers({
  authentication,
  users,
  customers,
  overallstatsjson,
  labelstatsjson,
  progressjson,
  alert,
});

export default rootReducer;