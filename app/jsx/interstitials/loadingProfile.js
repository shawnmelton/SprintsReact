import React from 'react';
import { View } from 'react-native';

let fwkStyles = require('../../styles/framework'),

    template = function() {
        return (
            <View style={[fwkStyles.bgWhite, fwkStyles.flex1, fwkStyles.alignCenter, fwkStyles.flexColumns]}>
                <View style={[fwkStyles.bgTransparent, fwkStyles.height0, fwkStyles.width0, fwkStyles.border, fwkStyles.borderAccentBlue, 
                    fwkStyles.borderLeftTransparent, { borderLeftWidth: 100, borderBottomWidth: 100 }]} />
                <View style={[fwkStyles.bgDarkBlue]} />
            </View>
        );
    };

export default template;