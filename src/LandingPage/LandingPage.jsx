import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import { CustomerPieStats, CustomerBarStats, ProgressBar, CustomerLineStats } from '../_components';

class LandingPage extends React.Component {
   

    componentDidMount() {
        const { user, loading, customers } = this.props;
        this.props.dispatch(userActions.getCustomer(user.id));
        this.props.dispatch(userActions.getOverallStats(user.id)); // set overallstats state
        
        // if (customers["customers"]) {
        //     const label_inds = displayPieStats(customers)
        //     console.log("MOUNT HERE")
        //     console.log(label_inds)
        // }
        
        //const label_inds = {customers["customers"] ? displayPieStats(customers) : ''}
        //this.props.dispatch(userActions.getLabelStats(user.id, customers)); // set labelStats state
        

    }

    componentWillReceiveProps() {
        
        if (this.props.customers["customers"] && !this.props.labelstatsjson.loading && !this.props.labelstatsjson.labelstatsjson) {
            const label_inds = displayPieStats(this.props.customers)
            this.props.dispatch(userActions.getLabelStats(this.props.user.id, this.props.customers))
        }

        console.log(this.props.labelstatsjson)
    }

    render() {

        const { user, labelstatsjson, overallstatsjson, customers } = this.props;
        //const c = customers["customers"] ? customers["customers"] : undefined;
        //console.log(c)
        //console.log("LABEL STATS JSON")
        //console.log(labelstatsjson)
        //displayPieStats(user.id, c);
       
        console.log(labelstatsjson)
        console.log(overallstatsjson)
        // console.log("CUSTOMERSSSSS")
        // console.log(customers)
        // console.log("LABELSTATSSSS")
        // console.log(labelstatsjson)
        //console.log(c)

        //displayPieStats(user.id, customers["customers"])
        
        // this.props.dispatch(userActions.getLabelStats(user.id, c))
        // console.log(labelstatsjson)
        

        return (
            <div className="col-md-12">
                <div className="col-md-6 col-md-offset-3">
                    <h1>Hi, {user.firstName}!</h1>
                </div>
                <div className="col-md-6 col-md-offset-3">
                    {customers["customers"] ? <CustomerPieStats userId={user.id} customers={customers} /> : ''}
                </div>
                    {/* {this.displayPieStats(user.id, c)} */}
                    {/* {customers["customers"] ? displayPieStats(customers) : ''} */}
                    {/* {overallstatsjson.overallstatsjson ? <CustomerLineStats overallstatsjson={overallstatsjson} /> : ''} */}
                    {/* {this.displayPieStats(user.id, c)} */}
                    <CustomerLineStats />
                    {/* <CustomerPieStats userId={user.id} customers = {c} /> */}
                    {/* <CustomerBarStats /> */}
            </div>
        );
    }

}

// function displayPieStats(customers) {

//     //const { labelstatsjson } = this.props;
//     console.log("HELLO I'M IN HERE")
//     console.log(customers)

//     // retrieve their datasets
//     let datasets = customers.customers.datasets
//     console.log(datasets)
    
//     // get the ids of their dataset
//     let label_stats_ind = []
//     datasets.forEach(element => {
//         label_stats_ind.push(element.id);
//     });
//     console.log(label_stats_ind)

//     // Dispatch below gets the label_stats for all datasets owned and place
//     // in labelstatsjson prop.
//     // {{label_stats1},{label_stats2},...}

//     dispatch(userActions.getLabelStats(label_stats_ind));
//     //console.log(labelstatsjson)

//     // Using labelstatsjson generate a Pie chart for each item
//     // using CustomerPieStats.js

// }

function displayPieStats(customers) {
    //const { labelstatsjson } = this.props;

    //const { labelstatsjson } = this.props;
    console.log("HELLO I'M IN HERE")
    console.log(customers)

    // retrieve their datasets
    let datasets = customers.customers.datasets
    console.log(datasets)
    
    // get the ids of their dataset
    let label_stats_ind = []
    datasets.forEach(element => {
        label_stats_ind.push(element.id);
    });
    console.log(label_stats_ind)

    return label_stats_ind
    // Dispatch below gets the label_stats for all datasets owned and place
    // in labelstatsjson prop.
    // {{label_stats1},{label_stats2},...}

    //this.props.dispatch(userActions.getLabelStats(label_stats_ind));
    //console.log(labelstatsjson)

    // Using labelstatsjson generate a Pie chart for each item
    // using CustomerPieStats.js

}


function mapStateToProps(state) {
    const { users, authentication, customers, labelstatsjson, overallstatsjson } = state;
    const { user } = authentication;
    return {
        user,
        users,
        customers,
        labelstatsjson,
        overallstatsjson
    };
}

const connectedLandingPage = connect(mapStateToProps)(LandingPage);
export { connectedLandingPage as LandingPage };