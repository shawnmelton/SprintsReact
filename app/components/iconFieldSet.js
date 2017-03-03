import React, { Component } from 'react';

import template from '../jsx/components/iconFieldSet';

class IconFieldSet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
    }

    render() {
        return template.bind(this)();
    }
}

export default IconFieldSet;