import { AsyncStorage } from 'react-native';

import User from './user';

import appConfig from '../config';
import logger from '../services/logger';

class CurrentUser {
    constructor() {
        this.user = null;
        this.loggedIn = false;
        this.basicAuthString = null;
        this.username = null;

        this.load();
    }

    _parseUserTokenString(string) {
        if (string !== null && typeof string === 'string') {
            this.loggedIn = true;

        }
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    load() {
        try {
            this._parseUserTokenString(await AsyncStorage.getItem(appConfig.storage.currentUser));
        } catch(error) {
            logger.error('Error loading current user.');
        }
    }

    logOut() {
        this.loggedIn = false;
        this.basicAuthString = null;

        if (this.user !== null) {
            this.user.setUsername(null);
        }
    }

    getBasicAuthString() {
        return this.basicAuthString;
    }

    getUsername() {
        return this.username;
    }

    setBasicAuthString(string) {
        this.basicAuthString = string;
    }

    setLogIn() {
        this.loggedIn = true;
    }

    setUser(user) {
        this.user = user;
    }

    setUsername(username) {
        this.username = username;
    }
}

// Singleton
let user = new CurrentUser();
export default user;