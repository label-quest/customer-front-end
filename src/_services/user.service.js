import config from 'config';
import { authHeader } from '../_helpers';
import axios from 'axios';

export const userService = {
    login,
    logout,
    getAll,
    getCustomer,
    getLabelStats,
    getOverallStats
};

function login(username, password) {
    return axios.post('http://localhost:3000/customer_authenticate/', {
        "username": username,
        "password": password,
      }).then(handleLoginResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

// MOCK LOGIN ======================
// function login(username, password) {
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password })
//     };

//     return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
//         .then(handleResponse)
//         .then(user => {
//             // store user details and jwt token in local storage to keep user logged in between page refreshes
//             localStorage.setItem('user', JSON.stringify(user));
//             // console.log("USER BELOW")
//             // console.log(user)
//             return user;
//         });
// }

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

// export function getCustomers(dispatch){
// 	return () => {
// 		axios.get('http://localhost:3000/customers')
// 		.then(handleGetResponse)
// 		.catch()
//     }
// }
function getCustomer(userId) {
    return axios.get('http://localhost:3000/customers/' + userId).then(handleGetResponse)
}

// takes in an array of dataset ids. This should return a nested
// set from the endpoint containing a get for all ids
function getLabelStats(userId, customers) {
    console.log("USER ID AND CUSTOMER")
    console.log(userId)
    console.log(customers)
    // iterate over all ids HERE
    return axios.get('http://localhost:3000/datasets/' + userId + '/label_stats').then(handleGetResponse)
}

// takes in a userId and returns dataset stats for that id
function getOverallStats(userId) {
    return axios.get('http://localhost:3000/customers/' + userId + 'overall_stats').then(handleGetResponse)
}

function handleLoginResponse(response) {
    if (!response.data.ok) {  
        if (response.status === 401) {
            logout();
            location.reload(true);
        }
        const error = "Invalid username or password";
        return Promise.reject(error);
    }
    return response.data
}

function handleGetResponse(response) {
    if (response.status === 401) {
        logout();
        location.reload(true);

        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
    }

    return response.data
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        console.log(data)
        return data;
    });
}