import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CustomerLandingView from "./views/CustomerLandingView"
import ConnectedLogin from "./views/Login"

const Index = () => <h2>HOME</h2>

const AppRouter = () => (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/customer/">Customer Page</Link>
                    </li>
                </ul>
            </nav>

            <Route path="/" exact component={Index} />
            <Route path="/login" exact component={ConnectedLogin} />
            <Route path="/customer/" component={CustomerLandingView} />
        </div>
    </Router>
);

export default AppRouter;