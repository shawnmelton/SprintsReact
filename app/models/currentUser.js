import { AsyncStorage } from 'react-native';

import User from './user';

import appConfig from '../config';
import logger from '../services/logger';
import session from '../services/session';
import base64 from '../../node_modules/base-64';

class CurrentUser {
    constructor() {
        this.user = null;
        this.loggedIn = false;
        this.basicAuthString = null;
        this.username = null;
        this.loaded = false;
    }

    _parseUserTokenString(string) {
        if (string !== null && typeof string === 'string') {
            this.loggedIn = true;
            this.basicAuthString = string;

            string = base64.decode(string);
            this.username = string.substr(0, string.indexOf(':'));
        }
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    async load() {
        this.loaded = true;

        try {
            this._parseUserTokenString(await AsyncStorage.getItem(appConfig.storageTokens.currentUser));

            if (this.loggedIn) {
                session.setString();
            }
        } catch(error) {
            logger.error('Error loading user from storage: '+ error.message);
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

    async setLogIn() {
        this.loggedIn = true;
        await AsyncStorage.setItem(appConfig.storageTokens.currentUser, this.basicAuthString);
    }

    setUser(user) {
        this.user = user;
    }

    setUsername(username) {
        this.username = username;
    }

    async verifyLogIn() {
        await this.load();
        return this.loggedIn;
    }
}

// Singleton
let user = new CurrentUser();
export default user;