import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute, CustomerPieStats, CustomerBarStats } from '../_components';
import { HomePage } from '../HomePage';
import { LandingPage } from '../LandingPage';
import { LoginPage } from '../LoginPage';
import { CustomerUpload } from '../CustomerUpload';

import Navigation from '../Navbar/Navbar';


// TESTING FOR PASSING PROPS
// const Index2 = () => {
//     return (
//         <Index myValue={"TESTING22"} />
//     );
// };
// const Index = props => {
//     return (
//         <p>{props.myValue}</p>
//     );
// };
const Ind = () => <h2>Label Upload Placeholder</h2>



class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div>
                <Navigation props={this.props}/>
                <div className="jumbotron">
                    <div className="container">
                        <div className="col-lg-12 col-md-12 col-sm-12 maincontainer">
                            {alert.message &&
                                <div className={`alert ${alert.type}`}>{alert.message}</div>
                            }
                            <Router history={history}>
                                <div>
                                    <PrivateRoute exact path="/" component={LandingPage} />
                                    <PrivateRoute exact path="/uploadData" component={CustomerUpload} />
                                    <PrivateRoute exact path="/uploadLabels" component={Ind} />
                                    <Route path="/login" component={LoginPage} />
                                </div>
                            </Router>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 