import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet, TextInput, StatusBar, Platform} from 'react-native';
import IconInputText from '../component/IconInputText';
import NextButton from '../component/NextButton';
import Display from "../resource/Display";

export default class MainScreen extends React.Component {
    constructor() {
        super();
    }

    //设置navigation去标题栏
    static navigationOptions = {
        header: null
    }

    nextBtnClick() {
        alert('点击了登录');
    }

    backClick() {
        this.props.navigation.goBack();
    }

    forgetPasswordClick() {
        const {navigate} = this.props.navigation;
        navigate('ForgetPassword');
    }

    /**
     * 立即注册
     */
    regist() {
        const {navigate} = this.props.navigation;
        navigate('Regist');
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

                <IconInputText secureTextEntry={true} drawablePadding={30}
                               leftSource={require('../resource/img/Password.png')}
                               placeholder='请输入密码'
                               layoutStyle={[styles.inputLayout, {marginTop: 28}]} contentStyle={styles.inputContent}/>

                <TouchableOpacity activeOpacity={0.5}
                                  style={{
                                      alignSelf: 'flex-end',
                                      marginRight: 46,
                                      marginTop: 11
                                  }} onPress={() => {
                    this.forgetPasswordClick()
                }}>
                    <Text style={styles.forgetPassword}>
                        忘记密码？
                    </Text>
                </TouchableOpacity>

                <View style={{marginTop: 50, flexDirection: 'row', alignSelf: 'center'}}>
                    <Text style={{fontSize: 13, color: Display.gray_95}}>
                        没有账号，
                    </Text>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {
                        this.regist()
                    }}>
                        <Text style={{fontSize: 13, color: Display.orange_f5}}>
                            立即注册
                        </Text>
                    </TouchableOpacity>
                </View>

                <NextButton onPress={() => {
                    this.nextBtnClick()
                }} layoutStyle={styles.btnLayouStyle} title="登 录"/>
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
        marginTop: 123,
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
        marginTop: 66,
    }
});