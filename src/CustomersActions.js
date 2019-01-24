import { GET_CUSTOMERS, GET_CUSTOMER_DATASETS } from './types'
import axios from 'axios'

export function getCustomerDatasets(dispatch) {
    return function(cust) {
        axios.get('http://localhost:8000/customers/3/data_sets/')
        .then(response => {
          if(response.status === 200) {
              console.log(response)
              dispatch({ type: GET_CUSTOMER_DATASETS, dataset: response.data })
          }  
        })
        .catch(error => console.log(error.response))
    }
}

export function getCustomers(dispatch) {
    return function() {
        console.log("get customers called")
        axios.get('http://localhost:8000/customers/')
        .then(response => {
            //console.log(response)
            if(response.status === 200) {
                dispatch({ type: GET_CUSTOMERS, customers: response.data })
            }
        })
        .catch(error => console.log(error.response));
    }
}