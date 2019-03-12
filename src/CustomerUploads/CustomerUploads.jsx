import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import { LandingPage } from '../LandingPage';

class CustomerUploads extends React.Component {
    componentWillMount() {
        const { user, loading, customers } = this.props;
        this.props.dispatch(userActions.getCustomer(user.id));
        this.props.dispatch(userActions.getOverallStats(user.id));
        this.props.dispatch(userActions.getLabelStats(user.id));
        this.props.dispatch(userActions.getProgress(user.id));
    }

    render() {
        console.log(this.props.overallstatsjson)
        return (
            <h1>Test</h1>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication, customers, progressjson, labelstatsjson, overallstatsjson } = state;
    const { user } = authentication;
    return {
        user,
        users,
        customers,
        progressjson,
        labelstatsjson,
        overallstatsjson
    };
}

const connectedCustomerUploads = connect(mapStateToProps)(CustomerUploads);
export { connectedCustomerUploads as CustomerUploads };