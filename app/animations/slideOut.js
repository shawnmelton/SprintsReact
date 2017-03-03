import React from 'react';
import { LayoutAnimation } from 'react-native';

let slideOutAnimation = {
    duration: 300,
    update: {
        type: LayoutAnimation.Types.easeOut,
        property: LayoutAnimation.Properties.opacity
    }
};

module.exports = slideOutAnimation;