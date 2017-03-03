import React from 'react';
import { TouchableHighlight, Text, ActivityIndicator, View } from 'react-native';

let fwkStyles = require('../../styles/framework'),

    template = function() {
        return (
            <TouchableHighlight onPress={() => { this.onPress() }}>
                <View style={[fwkStyles.bgAccentBlue, fwkStyles.border, fwkStyles.borderWhite, fwkStyles.height50]}>
                    <ActivityIndicator style={[{height: this.state.loader.animating ? 50 : 0}]} 
                        color="#fff"
                        hidesWhenStopped={true}
                        animating={this.state.loader.animating} />
                    <Text style={[fwkStyles.textWhite, fwkStyles.textCenter, fwkStyles.fontSize16, fwkStyles.height50, 
                        {lineHeight: 50, height: this.state.text.height}]}>{this.props.text}</Text>
                </View>
            </TouchableHighlight>
        );
    };

export default template;