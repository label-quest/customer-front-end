import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
    getAll,
    //getCustomerDatasets,
    getCustomer,
    getLabelStats,
    getOverallStats,
    getProgress
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

function getCustomer(userId) {
    return dispatch => {
        dispatch(request());
        userService.getCustomer(userId)
            .then(
                userService.getLabelStats(userId)
                    .then(
                        customers => dispatch(success(customers)),
                        labelstatsjson => dispatch(success(labelstatsjson)),
                        error => dispatch(failure(error))
                    )
                //
                //error => dispatch(failure(error))
                    //userService.getOverallStats(userId);
            );
    };

    function request() { return { type: userConstants.GET_CUSTOMERS_REQUEST }}
    function success(customers) { return { type: userConstants.GET_CUSTOMERS_SUCCESS, customers }}
    function failure(error) { return { type: userConstants.GET_CUSTOMERS_FAILURE, error }}
}

// takes in an array of datasetIds
function getLabelStats(userId, customers) {
    return dispatch => {
        dispatch(request());

        userService.getLabelStats(userId)
            .then(
                labelstatsjson => dispatch(success(labelstatsjson)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GET_LABEL_STATS_REQUEST }}
    function success(labelstatsjson) { return { type: userConstants.GET_LABEL_STATS_SUCCESS, labelstatsjson }}
    function failure(error) { return { type: userConstants.GET_LABEL_STATS_FAILURE, error }}
}

function getOverallStats(userId) {
    return dispatch => {
        dispatch(request());

        userService.getOverallStats(userId)
            .then(
                overallstatsjson => dispatch(success(overallstatsjson)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GET_OVERALL_STATS_REQUEST }}
    function success(overallstatsjson) { return { type: userConstants.GET_OVERALL_STATS_SUCCESS, overallstatsjson }}
    function failure(error) { return { type: userConstants.GET_OVERALL_STATS_FAILURE, error }}
}

function getProgress(userId) {
    return dispatch => {
        dispatch(request());
        userService.getProgress(userId)
            .then(
                progressjson => dispatch(success(progressjson)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GET_PROGRESS_STATS_REQUEST }}
    function success(progressjson) { return { type: userConstants.GET_PROGRESS_STATS_SUCCESS, progressjson }}
    function failure(error) { return { type: userConstants.GET_PROGRESS_STATS_FAILURE, error }}
}


// function getCustomerDatasets(dispatch) {
//     return function(cust) {
//         axios.get('http://localhost:8000/customers/3/data_sets/')
//         .then(response => {
//           if(response.status === 200) {
//               console.log(response)
//               dispatch({ type: GET_CUSTOMER_DATASETS, dataset: response.data })
//           }  
//         })
//         .catch(error => console.log(error.response))
//     }
// }
