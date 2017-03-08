import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import UserProfileRequest from '../../services/api/userProfileRequest';
import UserMapper from '../../services/mappers/user';

import currentUser from '../../models/currentUser';
import logger from '../../services/logger';
import template from '../../jsx/interstitials/loadingProfile';

class LoadingProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };

        this.loadProfile();
    }

    loadProfile() {
        let request = new UserProfileRequest(currentUser.getUsername());
        request.call((json) => {
            let mapper = new UserMapper();
            currentUser.setUser(mapper.fromJSON(json));

            /*Actions.dashboard({
                type: 'reset'
            });*/
        }, (error) => {
            logger.warn('Unable to properly load user profile: ', error.message);

            /*Actions.signIn({
                type: 'reset'
            });*/
        });
    }

    render() {
        return template.bind(this)();
    }
}

export default LoadingProfile;