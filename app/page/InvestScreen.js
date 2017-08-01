import React from 'react';
import {View, Text, Image} from "react-native";

/**
 * 投资
 */
export default class InvestScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: '投资',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../resource/img/Investment1.png')}
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
                    投资
                </Text>
            </View>
        );
    }
};