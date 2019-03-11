import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import { CustomerPieStats, CustomerBarStats } from '../_components';

class LandingPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
        this.props.dispatch(userActions.getCustomers());
    }

    render() {

        const { user, users, customers } = this.props;
        // {this.props.editable ? this.props.editableOpts : undefined}
        console.log("LOGGED IN USER")
        console.log(user)
        const c = customers["customers"] ? customers["customers"] : undefined;
        console.log(c)
        

        return (
            <div>
                <div className="col-md-6 col-md-offset-3">
                    <h1>Hi {user.firstName}!</h1>
                    <p>You're logged in with React & JWT!!</p>
                    <p>
                        <Link to="/login">Logout</Link>
                    </p>
                    <p></p>
                    <p></p>
                </div>
                    {/* <CustomerPieStats />
                    <CustomerBarStats /> */}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication, customers } = state;
    const { user } = authentication;
    return {
        user,
        users,
        customers
    };
}

const connectedLandingPage = connect(mapStateToProps)(LandingPage);
export { connectedLandingPage as LandingPage };