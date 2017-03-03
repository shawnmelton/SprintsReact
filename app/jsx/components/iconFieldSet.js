import React from 'react';
import { Text, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

let fwkStyles = require('../../styles/framework'),
    sharedStyles = require('../../styles/shared'),

    template = function() {
        return (
            <View style={[fwkStyles.bgDarkBlue, fwkStyles.flexRows, fwkStyles.marginBottom10, fwkStyles.border, fwkStyles.borderWhite, 
                {height: 50}]}>
                <Icon name={this.props.icon} size={24} style={[fwkStyles.textWhite, fwkStyles.marginTop10, fwkStyles.textCenter, 
                    {width: 40, height: 30, lineHeight: 30}]} />
                <View style={[sharedStyles.verticalLineDivider, fwkStyles.marginTop10, fwkStyles.bgTransWhite, fwkStyles.marginRight10, 
                    {width: 1, height: 30}]} />
                <TextInput style={[fwkStyles.marginTop10, fwkStyles.marginRight10, fwkStyles.bgOffWhite, fwkStyles.flex1, fwkStyles.textWhite, 
                    {height: 30, backgroundColor: "rgba(0, 0, 0, 0)"}]} 
                    onChangeText={(text) => { this.props.onChangeText(text) }}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder={this.props.placeholder}
                    placeholderTextColor="rgb(150, 200, 255)"
                    secureTextEntry={this.props.secureTextEntry || false} />
            </View>
        );
    };

export default template;