import React from 'react';
import {Alert, TouchableOpacity, View, Text, Image, StyleSheet, TextInput, StatusBar, Platform} from 'react-native';
import IconInputText from '../component/IconInputText';
import NextButton from '../component/NextButton';
import SendSmsBotton from '../component/SendSmsBotton';
import PasswordInputText from '../component/PasswordInputText';
import CheckBox from '../component/CheckBox';


import Display from "../resource/Display";


export default class Regist extends React.Component {
    constructor() {
        super();
    }

    nextBtnClick() {
        let checkBox = this.refs['checkBox'];
        let checked = checkBox.isChecked();
        let phoneNum = this.refs['phone_num'].getText();
        let password = this.refs['password'].getText();
        if (!checked) {
            this.showMessage('请阅读并同意《平台协议》');
        } else if (this.isEmpty(phoneNum)) {
            this.showMessage('请输入手机号');
        } else if (!this.verifyPassword(password)) {
            this.showMessage('您输入的密码不合法');
        } else {
            this.showMessage('调用注册接口');
        }
    }

    showMessage(message) {
        Alert.alert(
            '提示',
            message,
            [
                {text: '知道了', onPress: () => console.log('点击确定')},
            ]
        );
    }

    isEmpty(obj) {
        if (obj === null) return true;
        if (typeof obj === 'undefined') {
            return true;
        }
        if (typeof obj === 'string') {
            if (obj === "") {
                return true;
            }
            const reg = new RegExp("^([ ]+)|([　]+)$");
            return reg.test(obj);
        }
        return false;
    }

    backClick() {
        this.props.navigation.goBack();
    }

    render() {
        let AndroidStatusBar = null;
        if (Platform.OS === 'android') {
            AndroidStatusBar = <StatusBar translucent={true} backgroundColor='white' barStyle={'dark-content'}/>;
        }
        return (
            <View style={styles.container}>
                {AndroidStatusBar}
                <TouchableOpacity activeOpacity={0.5} style={styles.backIcon} onPress={() => {
                    this.backClick()
                }}>
                    <Image source={require('../resource/img/retuer.png')}/>
                </TouchableOpacity>

                <Image source={require('../resource/img/icon60.png')} style={styles.appIcon}/>

                <IconInputText ref="phone_num" maxLength={11} keyboardType="phone-pad" drawablePadding={30}
                               leftSource={require('../resource/img/Cell-phone-number.png')}
                               placeholder='请输入手机号'
                               layoutStyle={styles.inputLayout} contentStyle={styles.inputContent}/>

                <PasswordInputText ref="password"/>

                <View style={[{marginTop: 28, flexDirection: 'row'}]}>
                    <IconInputText
                        maxLength={6}
                        keyboardType="numeric"
                        drawablePadding={30}
                        leftSource={require('../resource/img/Verification-Code.png')}
                        placeholder='请输入验证码'
                        layoutStyle={[styles.inputLayout, {
                            paddingRight: 0,
                            marginTop: 0,
                            marginRight: 7.5,
                            flex: 1
                        }]}
                        contentStyle={styles.inputContent}/>

                    <SendSmsBotton
                        onPress={() => {
                            alert('点击了发送验证码');
                        }}/>
                </View>

                <View style={styles.protocolContainer}>
                    <CheckBox ref="checkBox"/>
                    <Text style={[styles.protocolText, {marginLeft: 8}]}>
                        我已阅读并同意
                    </Text>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {
                        this.protocolClick()
                    }}>
                        <Text style={[styles.protocolText, {color: Display.orange_f5}]}>
                            《平台协议》
                        </Text>
                    </TouchableOpacity>
                </View>

                <NextButton onPress={() => {
                    this.nextBtnClick()
                }} layoutStyle={styles.btnLayouStyle} title="注册"/>
            </View>
        );
    }

    protocolClick() {
        alert('点击了协议');
    }

    /**
     * 检验密码的合法性
     * @param password
     */
    verifyPassword(password) {
        const re = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
        return password.match(re);
    }
}

const styles = StyleSheet.create({
    protocolContainer: {flexDirection: 'row', marginTop: 21.5, marginLeft: 46, alignItems: 'center'},
    protocolText: {fontSize: 12, color: Display.gray_66},
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    backIcon: {
        marginLeft: 15,
        marginTop: 30,
    },
    appIcon: {
        marginTop: 55,
        alignSelf: 'center',
    },
    inputLayout: {
        marginTop: 73,
        paddingLeft: 46,
        paddingRight: 46,
    },
    inputContent: {
        fontSize: 15,
    },
    forgetPassword: {
        fontSize: 12,
        color: Display.gray_b5,
    },
    nextBtn: {
        marginTop: 66,
        width: Display.screenWidth - 46 * 2,
        color: 'orange',
        alignSelf: 'center'
    },
    btnLayouStyle: {
        marginTop: 78,
    }
});