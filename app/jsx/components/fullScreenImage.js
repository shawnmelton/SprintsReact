import React from 'react';
import { Image } from 'react-native';

let fwkStyles = require('../../styles/framework'),

    template = function() {
        return (
            <Image source={this.props.source} style={[fwkStyles.flex1, fwkStyles.clearHeight, fwkStyles.clearWidth]}>
                {this.props.children}
            </Image>
        );
    };

export default template;