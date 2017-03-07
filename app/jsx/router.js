import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import SignIn from '../views/signIn';
import LoadingProfile from '../views/interstitials/loadingProfile';
import Dashboard from '../views/dashboard';

export default () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="signIn" component={SignIn} title="Sign In" hideNavBar={true} initial />
                <Scene key="loadingProfile" component={LoadingProfile} title="Loading Account" hideNavBar={true} />
                <Scene key="dashboard" component={Dashboard} title="Dashboard" hideNavBar={true} />
            </Scene>
        </Router>
    );
}