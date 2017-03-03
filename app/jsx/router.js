import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import SignIn from '../views/signIn';
import Dashboard from '../views/dashboard';

export default () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="signin" component={SignIn} title="Sign In" hideNavBar={true} initial />
                <Scene key="dashboard" component={Dashboard} title="Dashboard" hideNavBar={true} />
            </Scene>
        </Router>
    );
}