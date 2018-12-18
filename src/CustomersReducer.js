import { GET_CUSTOMERS, GET_CUSTOMER_DATASETS } from './types'



const INITIAL_STATE = {
    customers: [],
    dataset: [],
}

export function customersReducer(state = INITIAL_STATE, action){
    switch(action.type) {
        case GET_CUSTOMERS:
            console.log("reducer is called!")
            return {
                ...state,
                    customers: action.customers
            }
        case GET_CUSTOMER_DATASETS:
            return {
                ...state,
                    dataset: action.dataset
                }
        default:
            return state
    }
}