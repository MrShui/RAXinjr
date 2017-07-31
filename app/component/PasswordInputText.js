import React from 'react';
import {Image, Platform, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Display from "../resource/Display";


export default class PasswordInputText extends React.Component {
    constructor() {
        super();
        this.state = {
            showPassword: false,
        }
    }

    render() {
        let padding = null;
        let underlineColorAndroid = null;
        let androidImgMarginTop = null;
        let eyeMarginTop = null;
        if (Platform.OS === 'android') {
            padding = 0;
            underlineColorAndroid = Display.transparent;
            androidImgMarginTop = 5;
            eyeMarginTop = 10;
        } else {
            eyeMarginTop = 5;
        }

        return (
            <View style={[styles.inputLayout, {width: Display.screenWidth}]}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../resource/img/Password.png')}
                           style={[{
                               marginTop: androidImgMarginTop,
                               marginRight: 30
                           }]}/>
                    <TextInput
                        onChangeText={(text) => {
                            this.text = text;
                        }}
                        secureTextEntry={!this.state.showPassword} maxLength={18}
                        placeholderTextColor={Display.gray_b5} placeholder="密码：6-20位数字、字母组合"
                        underlineColorAndroid={underlineColorAndroid}
                        style={[{fontSize: 15, flex: 1, padding: padding, color: Display.black_33}]}/>

                    <TouchableOpacity activeOpacity={0.5} onPress={() => {
                        this.eyeClick()
                    }}>
                        <Image source={this.state.showPassword
                            ? require('../resource/img/eye1.png') : require('../resource/img/eye.png')}
                               style={{alignSelf: 'center', marginTop: eyeMarginTop}}/>
                    </TouchableOpacity>
                </View>

                <View style={{
                    marginTop: 8,
                    backgroundColor: Display.gray_d3,
                    width: Display.screenWidth - (styles.inputLayout.paddingLeft + styles.inputLayout.paddingRight),
                    height: 0.5
                }}/>
            </View>
        );
    }

    /**
     * 点击眼睛
     */
    eyeClick() {
        this.setState({
            showPassword: !this.state.showPassword
        });
    }

    getText() {
        return this.text;
    }
}

const styles = StyleSheet.create({
    inputLayout: {
        marginTop: 28,
        paddingLeft: 46,
        paddingRight: 46,
    },
    inputContent: {
        fontSize: 15,
    },
});