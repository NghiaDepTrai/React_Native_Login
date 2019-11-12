import React, {Conponent} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class helloworld extends Conponent {
    render() {
        let gretting = "hello world, My name is Nghia"
        return(
            <Text>{gretting}</Text>
        )
    }
}