import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import { CustomerPieStats, CustomerBarStats, ProgressBarComponent, CustomerLineStats } from '../_components';

//import { Progress } from 'react-bootstrap'

class LandingPage extends React.Component {

    componentDidMount() {
        const { user, loading, customers } = this.props;
        this.props.dispatch(userActions.getCustomer(user.id));
        this.props.dispatch(userActions.getOverallStats(user.id));
        this.props.dispatch(userActions.getLabelStats(user.id));
        this.props.dispatch(userActions.getProgress(user.id));
    }

    render() {

        const { user, labelstatsjson, overallstatsjson, progressjson, customers } = this.props;

        return (
            <div className="col-md-12">
                <div className="col-md-6 col-md-offset-4">
                    <h1>Hi, {user.firstName}!</h1>
                </div>
                <div className="col-md-12">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        {progressjson.loading == false ? <ProgressBarComponent data={progressjson}/> : ''}
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        {(customers["customers"]&&labelstatsjson.loading == false) ? <CustomerPieStats userId={user.id} customers={customers} data={labelstatsjson} /> : ''}
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                            {(customers["customers"]&&overallstatsjson.loading == false) ? <CustomerLineStats userId={user.id} customers={customers} data={overallstatsjson} /> : ''}
                    </div>  
                </div>
            </div>
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

const connectedLandingPage = connect(mapStateToProps)(LandingPage);
export { connectedLandingPage as LandingPage };