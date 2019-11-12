import React, {Conponent} from 'react';
import {StyleSheet, Text,View} from 'react-native';

export default class Robot extends Conponent {
    render() {
        const imageUrl ={

            url:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Atlas_from_boston_dynamics.jpg/220px-Atlas_from_boston_dynamics.jpg'
        }
        return(
            <Image source={imageUrl} style = {{width:400 , height:300}} >   
            </Image>
        )
    }
}