import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet, TextInput, StatusBar, Platform} from 'react-native';
import IconInputText from '../component/IconInputText';
import NextButton from '../component/NextButton';
import SendSmsBotton from '../component/SendSmsBotton';
import PasswordInputText from '../component/PasswordInputText';

import Display from "../resource/Display";


export default class Regist extends React.Component {
    constructor() {
        super();
    }

    //设置navigation去标题栏
    static navigationOptions = {
        header: null
    }

    nextBtnClick() {

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

                <IconInputText maxLength={11} keyboardType="phone-pad" drawablePadding={30}
                               leftSource={require('../resource/img/Cell-phone-number.png')}
                               placeholder='请输入手机号'
                               layoutStyle={styles.inputLayout} contentStyle={styles.inputContent}/>

                {/*<IconInputText secureTextEntry={true} drawablePadding={30}*/}
                               {/*leftSource={require('../resource/img/Password.png')}*/}
                               {/*placeholder='密码：6-20位数字、字母组合'*/}
                               {/*layoutStyle={[styles.inputLayout, {marginTop: 28}]} contentStyle={styles.inputContent}/>*/}

                <PasswordInputText/>

                <View style={[{marginTop: 28, flexDirection: 'row'}]}>
                    <IconInputText maxLength={6} keyboardType="numeric" drawablePadding={30}
                                   leftSource={require('../resource/img/Verification-Code.png')}
                                   placeholder='请输入验证码'
                                   layoutStyle={[styles.inputLayout, {
                                       paddingRight: 0,
                                       marginTop: 0,
                                       marginRight: 7.5,
                                       flex: 1
                                   }]}
                                   contentStyle={styles.inputContent}/>

                    <SendSmsBotton title="发送验证码"/>
                </View>

                <NextButton onPress={() => {
                    this.nextBtnClick()
                }} layoutStyle={styles.btnLayouStyle} title="注册"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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