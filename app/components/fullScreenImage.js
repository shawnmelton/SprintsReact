import React, { Component } from 'react';

import template from '../jsx/components/fullScreenImage';

class FullScreenImage extends Component {
    render() {
        return template.bind(this)();
    }
}

export default FullScreenImage;