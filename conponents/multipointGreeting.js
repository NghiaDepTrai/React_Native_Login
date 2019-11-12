import React, {Conponent} from 'react';
import {Text,StyleSheet,View} from 'react-native';
import { expression } from '@babel/template';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// private component
class greeting extends Conponent{
    render() {
        return(
            <Text>Hello {this.props.name}</Text>
        );
    }
}
// public component (view componet)

export default class MultipointGreeting extends Conponent {
    render() {
        return(
            <View style= {Colors='red'}>
                <greeting name="nguyen van nghia"></greeting>
            </View>
        )
    }
}