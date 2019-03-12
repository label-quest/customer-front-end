import { userConstants } from '../_constants';

export function labelstatsjson(state = {}, action) {
  switch (action.type) {
    case userConstants.GET_LABEL_STATS_SUCCESS:
      return {
        labelstatsjson: action.labelstatsjson
      };
    case userConstants.GET_LABEL_STATS_FAILURE:
      return {
        error: action.error  
      };
    default:
      return state
  }
}