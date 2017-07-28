/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import SplashScreen from './app/page/SplashScreen';

import {AppRegistry} from 'react-native';

export default class RAXinjr extends Component {
    render() {
        return (
            <SplashScreen/>
        );
    }
}

AppRegistry.registerComponent('RAXinjr', () => RAXinjr);
