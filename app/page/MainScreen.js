import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, StatusBar, Platform} from 'react-native';
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

    render() {
        let AndroidStatusBar = null;
        if (Platform.OS === 'android') {
            AndroidStatusBar = <StatusBar translucent={true} backgroundColor='white' barStyle={'dark-content'}/>;
        }
        return (
            <View style={styles.container}>
                {AndroidStatusBar}
                <Image source={require('../resource/img/retuer.png')} style={styles.backIcon}/>
                <Image source={require('../resource/img/icon60.png')} style={styles.appIcon}/>
                <IconInputText drawablePadding={30} leftSource={require('../resource/img/Cell-phone-number.png')}
                               placeholder='请输入手机号'
                               layoutStyle={styles.inputLayout} contentStyle={styles.inputContent}/>

                <IconInputText drawablePadding={30} leftSource={require('../resource/img/Password.png')}
                               placeholder='请输入密码'
                               layoutStyle={[styles.inputLayout, {marginTop: 28}]} contentStyle={styles.inputContent}/>

                <Text style={styles.forgetPassword}>
                    忘记密码？
                </Text>

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
        alignSelf: 'flex-end',
        marginRight: 46,
        marginTop: 11,
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