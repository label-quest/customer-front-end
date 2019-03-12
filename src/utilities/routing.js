import React from 'react';
import {Route, Switch, Redirect} from 'react-router';

const loggedInNavbarPages = [
	{
		name: 'Customers',
		path: '/customers',
		icon: ''
	}
];

const loggedOutNavbarPages = [
	{
		name: 'Login',
		path: '/login',
		icon: ''
	}
];

//used by navbar to genereate its items
export function generateNavbar(user) {
	if (user) {
		return loggedInNavbarPages;
	} else {
		return loggedOutNavbarPages;
	}
}