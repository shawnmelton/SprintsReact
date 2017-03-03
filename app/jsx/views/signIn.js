import React from 'react';
import { Text, View, Button, Image } from 'react-native';

import IconFieldSet from '../../components/iconFieldSet';
import FullScreenImage from '../../components/fullScreenImage';
import FormButton from '../../components/formButton';

let fwkStyles = require('../../styles/framework'),
    sharedStyles = require('../../styles/shared'),

    template = function() {
        return (
            <FullScreenImage source={require('../../img/backgroundFull2.png')}>
                <View style={[fwkStyles.bgTransparent, fwkStyles.flex1, fwkStyles.alignCenter, fwkStyles.justifySpaceBetween, fwkStyles.flexColumns]}>
                    <Image style={[fwkStyles.margin10, fwkStyles.marginTop50, {width: 125, height: 194}]}
                        source={require('../../img/fullLogo2.png')} />
                    <View style={[fwkStyles.margin10, fwkStyles.marginBottom50, {width: 300}]}>
                        <Text style={[fwkStyles.bgError, fwkStyles.textError, fwkStyles.borderError, fwkStyles.textCenter, fwkStyles.textBold, {
                                padding: this.state.errorText.padding,
                                borderWidth: this.state.errorText.borderWidth,
                                marginBottom: this.state.errorText.marginBottom,
                                backgroundColor: this.state.errorText.backgroundColor
                            }]}>
                            {this.state.errorText.message}</Text>
                        <IconFieldSet placeholder="Email Address" icon="account-circle" onChangeText={(text) => {
                            this.setState({
                                username: text
                            });
                            this.onFormFieldChange(); 
                        }} />
                        <IconFieldSet placeholder="Password" icon="vpn-key" secureTextEntry={true} onChangeText={(text) => {
                            this.setState({
                                password: text
                            });
                            this.onFormFieldChange(); 
                        }} />
                        <FormButton text="Submit" onPress={(callback) => { this.onFormSubmit(callback) }} />
                    </View>
                </View>
            </FullScreenImage>
        );
    };

export default template;