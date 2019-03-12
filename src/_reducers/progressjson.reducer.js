import { userConstants } from '../_constants';

export function progressjson(state = {}, action) {
  switch (action.type) {
    case userConstants.GET_PROGRESS_STATS_REQUEST:
      return {
        loading: true
      };
    case userConstants.GET_PROGRESS_STATS_SUCCESS:
      return {
        progressjson: action.progressjson,
        loading: false
      };
    case userConstants.GET_PROGRESS_STATS_FAILURE:
      return {
        error: action.error,
        loading: false
      };
    default:
      return state
  }
}