import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Display from '../resource/Display';


export default class NextButton extends React.Component {
    constructor() {
        super();
    }

    render() {
        const btnClick = this.props.onPress;
        return (
            <TouchableOpacity onPress={() => {
                btnClick()
            }} activeOpacity={0.7} style={[this.props.layoutStyle, styles.touchable]}>
                <Text style={styles.title}>
                    {this.props.title}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 17,
        alignSelf: 'center',
        color: Display.white
    },
    touchable: {
        padding: 10,
        backgroundColor: Display.orange_f5,
        borderRadius: 19,
        alignSelf: 'center',
        justifyContent: 'center',
        width: Display.screenWidth - 46 * 2,
        height: 38,
    }
});