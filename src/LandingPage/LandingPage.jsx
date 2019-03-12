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

        const { user, labelstatsjson, customers } = this.props;

        // check that the customers have been fetched
        const c = customers["customers"] ? customers["customers"] : undefined;
        //console.log(c)
        console.log("LABEL STATS JSON")
        //console.log(labelstatsjson)
        displayPieStats(user.id, c);
        

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
                    {/* {this.displayPieStats(user.id, c)} */}
                    
                    {/* <CustomerPieStats userId={user.id} customers = {c} /> */}
                    {/* <CustomerBarStats /> */}
            </div>
        );
    }

}

function displayPieStats(userId, customers) {
    console.log("FUNCTION PIE CHART")
    console.log(userId)

    //const { labelstatsjson } = this.props;
    
    if (customers) {
        console.log("HELLO I'M IN HERE")
        console.log(customers)

        // get the customer log for current user
        let filteredCustomers = customers.filter(customer => {
            return customer.id === userId;
        });
        console.log(filteredCustomers)

        // retrieve their datasets
        let datasets = filteredCustomers[0].datasets
        console.log(datasets)
        
        // get the ids of their dataset
        let label_stats_ind = []
        datasets.forEach(element => {
            label_stats_ind.push(element.id);
        });
        console.log(label_stats_ind)

        // Dispatch below gets the label_stats for all datasets owned and place
        // in labelstatsjson prop.
        // {{label_stats1},{label_stats2},...}

        //dispatch(userActions.getLabelStats(label_stats_ind));
        //console.log(labelstatsjson)

        // Using labelstatsjson generate a Pie chart for each item
        // using CustomerPieStats.js
        return
    }

    return
}


function mapStateToProps(state) {
    const { users, authentication, customers, labelstatsjson } = state;
    const { user } = authentication;
    return {
        user,
        users,
        customers,
        labelstatsjson
    };
}

const connectedLandingPage = connect(mapStateToProps)(LandingPage);
export { connectedLandingPage as LandingPage };