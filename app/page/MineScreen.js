import React from 'react';
import {Image, Text, View} from "react-native";

/**
 * 我的界面
 */
export default class MineScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: '我的',
        tabBarIcon: ({tintColor}) => (
            <Image
                resizeMode={'contain'}
                source={require('../resource/img/me-1.png')}
                style={[{tintColor: tintColor, width: 21, height: 21}]}
            />
        ),
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>
                    我的
                </Text>
            </View>
        );
    }
}