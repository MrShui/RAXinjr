import React from 'react';
import {TouchableOpacity, View, TextInput, Image, Platform, StyleSheet, Dimensions} from 'react-native';
import Display from '../resource/Display';


/**
 * 带有icon图标的输入框
 */
export default class IconInputText extends React.Component {
    constructor() {
        super();
    }

    render() {
        let padding = null;
        let underlineColorAndroid = null;
        let androidImgMarginTop = null;
        if (Platform.OS === 'android') {
            padding = 0;
            underlineColorAndroid = Display.transparent;
            androidImgMarginTop = 5;
        }
        return (
            <View style={[this.props.layoutStyle, {width: Display.screenWidth}]}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={this.props.leftSource}
                           style={[this.props.drawableStyle, {
                               marginTop: androidImgMarginTop,
                               marginRight: this.props.drawablePadding
                           }]}/>
                    <TextInput secureTextEntry={this.props.secureTextEntry} maxLength={this.props.maxLength}
                               keyboardType={this.props.keyboardType}
                               placeholderTextColor={Display.gray_b5} placeholder={this.props.placeholder}
                               underlineColorAndroid={underlineColorAndroid}
                               style={[this.props.contentStyle, {flex: 1, padding: padding, color: Display.black_33}]}/>

                    {/*<TouchableOpacity>*/}
                        {/*<Image source={} />*/}
                    {/*</TouchableOpacity>*/}
                </View>

                <View style={{
                    marginTop: 8,
                    backgroundColor: Display.gray_d3,
                    width: Display.screenWidth - (this.props.layoutStyle.paddingLeft + this.props.layoutStyle.paddingRight),
                    height: 0.5
                }}/>
            </View>
        );
    }
}