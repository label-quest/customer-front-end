import { userConstants } from '../_constants';

// const INITIAL_STATE = {
//   customers: [],
//   dataset: [],
// }
// // state = INITIAL_STATE

export function users(state = {}, action) {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        items: action.users
      };
    case userConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    case userConstants.GET_CUSTOMERS:
      return {
          ...state,
              customers: action.customers
      }
    case userConstants.GET_CUSTOMER_DATASETS:
      return {
          ...state,
              dataset: action.dataset
          }
    default:
      return state
  }
}