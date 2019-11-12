import React, {Conponent} from 'react';
import {StyleSheet,Text,View} from 'react-native';

export default class ListViewProduct extends Conponent {
    state = {
        name: [
            {
                id:0,
                value:"vo phi duong"

            },
            {
                id:1,
                value:'nguyen hoai bao'
            },
            {
                id:2,
                value:'sung hoa'
            },
            {
                id:3,
                value:'lac long quan'
            }
        ]
    };
    alertItem = (item) => {
        alert(item);
    }
    render() {
        return(
            <View>
                {
                    this.state.name.map((item,index) => {
                        <TouchableOpacity
                            key = {item.id}
                            style = {styles.container}
                            onPress = {() => this.alertItemName(item)}>
                            <Text style = {styles.text}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>    
                    })
                }
            </View>
        );
    }
}
const sytles = StyleSheet.create({
  container: {
        padding: 10,
         marginTop: 3,
        backgroundColor: '#d9f9b1',
        alignItems: 'center',
    },
    text: {
            color:'#ffffff'
        }
})