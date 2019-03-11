import config from 'config';
import { authHeader } from '../_helpers';
import axios from 'axios';

export const userService = {
    login,
    logout,
    getAll,
    getCustomers
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

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

function getCustomers() {
    return axios.get('http://localhost:3000/customers').then(handleBackendResponse)
    
    //, { crossdomain: true, headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type, Origin, Accept, Authorization, Content-Length, X-Requested-With' }}
    //.then(handleResponse);
    // return function() {
    //     console.log("get customers called")
    //     axios.get('http://localhost:8000/customers/')
    //     .then(response => {
    //         //console.log(response)
    //         if(response.status === 200) {
    //             dispatch({ type: GET_CUSTOMERS, customers: response.data })
    //         }
    //     })
    //     .catch(error => console.log(error.response));
    // }
}

function handleBackendResponse(response) {
    console.log("RESPONSE")
    console.log(response)
    //console.log(response.data)
    if (response.status === 401) {
        logout();
        location.reload(true);

        const error = (data && data.message) || response.statusText;
        console.log("ERROR")
        console.log(error)
        return Promise.reject(error);
    }

    console.log("DATA DATA")
    console.log(response.data)
    return response.data
}

function handleResponse(response) {
    console.log(response)
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        console.log("TESTTEST")
        console.log(data)
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}