import { userConstants } from '../_constants';

export function customers(state = {}, action) {
  switch (action.type) {
    case userConstants.GET_CUSTOMERS_REQUEST:
      return {
        loading: true
      };
    case userConstants.GET_CUSTOMERS_SUCCESS:
      return {
        customers: action.customers,
        loading: false
      };
    case userConstants.GET_CUSTOMERS_FAILURE:
      return {
        error: action.error,
        loading: false
      };
    default:
      return state
  }
}