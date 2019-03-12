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
        //console.log("USER ID")
        //console.log(user.id)

        // check that the customers have been fetched
        const c = customers["customers"] ? customers["customers"] : undefined;
        //console.log(c)
        

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
                    {displayPieStats(user.id, c)}
                    {/* <CustomerPieStats userId={user.id} customers = {c} /> */}
                    {/* <CustomerBarStats /> */}
            </div>
        );
    }
}

function displayPieStats(userId, customers) {
    console.log("FUNCTION PIE CHART")
    console.log(userId)
    
    if (customers) {
        console.log(customers)
        let filteredCustomers = customers.filter(customer => {
            return customer.id === userId;
        });
        console.log(filteredCustomers)

        let datasets = filteredCustomers[0].datasets
        console.log(datasets)
        
        let label_stats_ind = []
        datasets.forEach(element => {
            label_stats_ind.push(element.id);
        });

        console.log(label_stats_ind)
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