import React, { Component } from 'react';

import template from '../jsx/components/formButton';

class FormButton extends Component {
    constructor(props) {
        super(props);

        this.loaderShowing = false;

        this.state = {
            loader: {
                animating: false
            },
            text: {
                height: 50
            }
        };
    }

    onPress() {
        this.loaderShowing = true;
        this.toggleLoader();
        this.props.onPress(() => {
            this.toggleLoader();
        });
    }

    render() {
        return template.bind(this)();
    }

    toggleLoader() {
        this.setState({
            loader: {
                animating: this.loaderShowing
            },
            text: {
                height: this.loaderShowing ? 0 : 50
            }
        });
        this.loaderShowing = !this.loaderShowing;
    }
}

export default FormButton;