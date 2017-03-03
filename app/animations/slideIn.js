import React from 'react';
import { LayoutAnimation } from 'react-native';

let slideInAnimation = {
    duration: 300,
    update: {
        type: LayoutAnimation.Types.easeIn,
        property: LayoutAnimation.Properties.opacity
    }
};

module.exports = slideInAnimation;