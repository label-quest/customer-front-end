import { userConstants } from '../_constants';

export function overallstatsjson(state = {}, action) {
  switch (action.type) {
    case userConstants.GET_OVERALL_STATS_REQUEST:
      return {
        loading: true
      };
    case userConstants.GET_OVERALL_STATS_SUCCESS:
      return {
        overallstatsjson: action.overallstatsjson
      };
    case userConstants.GET_OVERALL_STATS_FAILURE:
      return {
        error: action.error  
      };
    default:
      return state
  }
}