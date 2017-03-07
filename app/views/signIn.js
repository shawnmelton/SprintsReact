import React, { Component } from 'react';
import { LayoutAnimation, Keyboard } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Authentication from '../services/api/authentication';

import base64 from '../../node_modules/base-64';
import logger from '../services/logger';
import slideInAnimation from '../animations/slideIn';
import slideOutAnimation from '../animations/slideOut';
import currentUser from '../models/currentUser';
import template from '../jsx/views/signIn';

class SignIn extends Component {
    constructor(props) {
        super(props);

        if (currentUser.isLoggedIn()) {
            Actions.dashboard({
                type: 'reset'
            });
        }

        this.formErrorShowing = false;

        this.state = {
            username: '',
            password: '',
            errorText: {
                padding: 0,
                marginBottom: 0,
                borderWidth: 0,
                message: '',
                backgroundColor: 'rgba(0, 0, 0, 0)'
            },
            form: {
                marginBottom: 50
            }
        };
    }

    componentWillMount () {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => { this.onKeyboardShow() });
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => { this.onKeyboardHide() });
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    onFormFieldChange() {
        if (this.formErrorShowing) {
            this.toggleFormError();
        }
    }

    onFormSubmit(hideButtonLoaderCallback) {
        let auth = new Authentication();
        auth.setAuthorization(base64.encode(this.state.username +':'+ this.state.password));
        auth.call((json) => {
            if (json.name) {
                currentUser.setBasicAuthString(base64.encode(this.state.username +':'+ this.state.password));
                currentUser.setLogIn();
                currentUser.setUsername(json.name);

                Actions.loadingProfile({
                    'type': 'reset'
                });
            } else {
                this.toggleFormError();
                hideButtonLoaderCallback();
            }
        }, (error) => {
            this.toggleFormError();
            hideButtonLoaderCallback();
        });
    }

    onKeyboardShow() {
        this.setState({
            form: {
                marginBottom: 225
            }
        });
    }

    onKeyboardHide() {
        this.setState({
            form: {
                marginBottom: 50
            }
        });
    }

    render() {
        return template.bind(this)();
    }

    toggleFormError() {
        LayoutAnimation.configureNext(this.formErrorShowing ? slideOutAnimation : slideInAnimation);
        this.setState({
            errorText: {
                padding: this.formErrorShowing ? 0 : 10,
                marginBottom: this.formErrorShowing ? 0 : 15,
                borderWidth: this.formErrorShowing ? 0 : 1,
                message: this.formErrorShowing ? '' : 'There was an error with your submission.  Please try again.',
                backgroundColor: this.formErrorShowing ? 'rgba(0, 0, 0, 0)' : 'rgb(245, 232, 232)'
            }
        });
        this.formErrorShowing = !this.formErrorShowing;
    }
}

export default SignIn;