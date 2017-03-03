import React, { Component } from 'react';
import router from './jsx/router';

class SprintsReact extends Component {
    render() {
        return router.bind(this)();
    }
}

export default SprintsReact;