import React from 'react';
import {Platform, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Display from '../resource/Display';

/**
 * 发送验证码按钮
 */
export default class SendSmsBotton extends React.Component {
    constructor() {
        super();
    }

    render() {
        let marginTop = null;
        if (Platform.OS === 'android') {
            marginTop = 6;
        }
        return (
            <TouchableOpacity activeOpacity={0.7} style={{
                marginTop: marginTop,
                height: 27.5,
                paddingTop: 8,
                paddingBottom: 8,
                paddingLeft: 12,
                paddingRight: 12,
                marginRight: 43,
                backgroundColor: Display.orange_f5,
                justifyContent: 'center'
            }}>
                <Text style={{fontSize: 12, color: Display.white}}>
                    {this.props.title}
                </Text>
            </TouchableOpacity>
        );
    }
}