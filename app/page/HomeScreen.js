import React from 'react';
import {Image, Text, View, StyleSheet, StatusBar, Platform} from "react-native";
import Swiper from 'react-native-swiper';
import Display from "../resource/Display";

/**
 * 首页
 */

const BANNER_IMGS = [
    require('../resource/img/meinv1.png'),
    require('../resource/img/meinv2.png'),
    require('../resource/img/meinv3.png'),
    require('../resource/img/meinv4.png')
];

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: '首页',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../resource/img/home-page1.png')}
                style={[{tintColor: tintColor, width: 21, height: 21}]}
            />
        ),
    };

    constructor(props) {
        super(props);
    }

    render() {
        let statusBar = null;
        if (Platform.OS === 'android') {
            statusBar = <StatusBar backgroundColor="transparent"/>;
        }
        return (
            <View>
                {statusBar}
                <Swiper
                    height={185}
                    onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                    dot={
                        <View style={{
                            backgroundColor: Display.gray_indicator,
                            width: 5,
                            height: 5,
                            borderRadius: 4,
                            marginLeft: 3,
                            marginRight: 3,
                            marginTop: 3,
                            marginBottom: 3
                        }}/>
                    }
                    activeDot={
                        <View style={{
                            backgroundColor: Display.white,
                            width: 5,
                            height: 5,
                            borderRadius: 4,
                            marginLeft: 3,
                            marginRight: 3,
                            marginTop: 3,
                            marginBottom: 3
                        }}/>
                    }
                    paginationStyle={{
                        bottom: 10
                    }}
                    loop={true}
                    autoplay={true}>
                    <Image style={styles.page} source={BANNER_IMGS[0]}/>
                    <Image style={styles.page} source={BANNER_IMGS[1]}/>
                    <Image style={styles.page} source={BANNER_IMGS[2]}/>
                    <Image style={styles.page} source={BANNER_IMGS[3]}/>
                </Swiper>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    page: {
        width: Display.screenWidth,
        height: 185,
        resizeMode: 'cover'
    },
});
