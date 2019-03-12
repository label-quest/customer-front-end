import React from 'react';
import { connect } from 'react-redux'

import { generateNavbar } from '../utilities/routing';

import { Button, Navbar, Nav } from 'react-bootstrap'


class Navigation extends React.Component {

	constructor(props) {
		super(props);
	}

	handleClickNavItem(path) {
		this.props.changePath(path);
	}

	render() {
		const menuItems = generateNavbar(this.props.user).map((item, i) => (
			<Nav.Link 
				key={item.path} 
				href={item.path}>
					{item.name}
			</Nav.Link>
		));

		if(this.props.user){
			menuItems.push(
				<Nav.Link key={'logout'} href='/login'>Logout</Nav.Link>
			);
		}

		return(
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="/">Label Me Customer Portal</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					{menuItems}
				</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

function mapStateToProps(state) {
	const { users, authentication } = state;
	const { user } = authentication;
	return {
		user,
		users,
	};
}

export default connect(
  mapStateToProps
)(Navigation);