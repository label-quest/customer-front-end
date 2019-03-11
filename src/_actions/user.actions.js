import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';
import axios from 'axios';

export const userActions = {
    login,
    logout,
    getAll,
    getCustomerDatasets,
    getCustomers
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

function getCustomerDatasets(dispatch) {
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

function getCustomers() {
    return dispatch => {
        dispatch(request());

        userService.getCustomers()
            .then(
                customers => dispatch(success(customers)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GET_CUSTOMERS_REQUEST }}
    function success(customers) { return { type: userConstants.GETALL_SUCCESS, customers }}
    function failure(error) { return { type: userConstants.GET_CUSTOMERS_FAILURE, error }}
}

