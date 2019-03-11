import { userConstants } from '../_constants';

export function customers(state = {}, action) {
  switch (action.type) {
    case userConstants.GET_CUSTOMERS_SUCCESS:
      return {
        customers: action.customers
      };
    case userConstants.GET_CUSTOMERS_FAILURE:
      return {
        error: action.error  
      };
    default:
      return state
  }
}