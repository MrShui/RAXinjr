import React from 'react';
import {StackNavigator, NavigationActions} from 'react-navigation';
import {Image, StyleSheet, StatusBar, View} from 'react-native';
import Dimensions from 'Dimensions';
import LoginScreen from './LoginScreen';
import ForgetPasswordScreen from "./ForgetPasswordScreen";
import RegistScreen from "./RegistScreen";
import MainScreen from "./MainScreen";

class SplashScreen extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        //组件挂载时调用
        this.timer = setTimeout(
            () => {
                //跳转到主界面
                this.launchMain();
            }, 1
        );
    }

    /**
     * 启动主界面
     */
    launchMain() {
        const resetActions = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'Login'})]
        });
        this.props.navigation.dispatch(resetActions);
    }

    componentWillUnmount() {
        //组件将被卸载时调用
        this.timer && clearTimeout(this.timer);
    }

    //设置navigation去标题栏
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View>
                <StatusBar hidden={true}/>
                <Image source={require('../resource/img/splash.png')} style={styles.splashImg}/>
            </View>
        );
    }
}

const ModalStack = StackNavigator({
    Splash: {
        screen: SplashScreen,
        navigationOptions: ({navigation}) => ({
            header: null
        }),
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: ({navigation}) => ({
            header: null
        }),
    },
    ForgetPassword: {
        screen: ForgetPasswordScreen,
        navigationOptions: ({navigation}) => ({
            header: null
        }),
    },
    Regist: {
        screen: RegistScreen,
        navigationOptions: ({navigation}) => ({
            header: null
        }),
    },
    Main: {
        screen: MainScreen,
        navigationOptions: ({navigation}) => ({
            header: null
        }),
    },
});

const styles = StyleSheet.create({
    splashImg: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
});

export default ModalStack;

