import React from 'react';
import {StyleSheet, Platform} from 'react-native';


const styles = StyleSheet.create({
    commonInput: {
        marginLeft: 47,
        marginRight: 47,
        ...Platform.select({
            android: {
                padding: 0,
            },
            ios: {}
        })
    },
});

export default styles;
