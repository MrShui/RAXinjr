"use strict";
import React from 'react';
import {Platform, TouchableOpacity, Text} from 'react-native';
import Display from '../resource/Display';
import PropTypes from 'prop-types';


/**
 * 发送验证码按钮
 */
React.propTypes = {
    onPress: PropTypes.func
};

export default class SendSmsBotton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countDown: "发送验证码",
            enable: true
        };
    }

    render() {
        let marginTop = null;
        if (Platform.OS === 'android') {
            marginTop = 6;
        }
        return (
            <TouchableOpacity
                disabled={!this.state.enable}
                onPress={() => {
                    this.btnClick()
                }}
                activeOpacity={0.7}
                style={{
                    marginTop: marginTop,
                    height: 27.5,
                    width: 83,
                    alignItems: 'center',
                    marginRight: 43,
                    backgroundColor: Display.orange_f5,
                    justifyContent: 'center'
                }}>
                <Text style={{fontSize: 12, color: Display.white}}>
                    {this.state.countDown}
                </Text>
            </TouchableOpacity>
        );
    }

    btnClick() {
        this.props.onPress();
        let time = 60;
        let enabled = false;
        this.setState({
            countDown: time,
            enable: enabled
        });
        this.interval = setInterval(() => {
            time--;
            let str = time;
            if (time === 0) {
                str = '发送验证码';
                clearInterval(this.interval);
                enabled = true;
            }
            this.setState({
                countDown: str,
                enable: enabled
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
};
