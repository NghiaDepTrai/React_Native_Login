import React, { Component } from "react";
import { Text, View, Button,StyleSheet,TextInput,TouchableOpacity } from "react-native";

export class HomeScreen extends React.Component {
  render() {
    state = {
      email: "",
      yourName: "",
      phoneNumber: "",
      password: "",
    }
     handleEmail = (text) => {
      this.setState({ email: text });
    }
    handleYourName = (text) => {
      this.setState({ yourName: text });
    }
    handlePhoneNumber = (text) => {
      this.setState({ phoneNumber: text });
    }
    handlPassword = (text) => {
      this.setState({ password: text });
    }
    login = (name) => {
      alert('Xin Chao ' + name + 'Vui long dang nhap nhe !!!');
    }
    
    return (
      <View style={Styles.container}>
        <TextInput style={Styles.input}
          underlineColorAndroid='transparent'
          placeholder="Your Email:"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          keyboardType='email-address'
          onChangeText={this.handleEmail} />
        <Text style={Styles.textShowBellowInput}>{this.state.email}</Text>
        {/* your name*/}
        <TextInput style={Styles.input}
          underlineColorAndroid='transparent'
          placeholder='Your Name:'
          placeholderTextColor='#9a73ef'
          autoCapitalize='none'
          onChangeText={this.handleYourName} />
        <Text style={Styles.textShowBellowInput}>{this.state.yourName}</Text>
        {/* Your phone number */}
        <TextInput style={Styles.input}
          underlineColorAndroid='transparent'
          placeholder='Your PhoneNumber:'
          placeholderTextColor='#9a72ef'
          autoCapitalize='none'
          onChangeText={this.handlePhoneNumber} />
        <Text style={Styles.textShowBellowInput}>{this.state.phoneNumber}</Text>
        {/* your Password:  */}
        <TextInput style={Styles.input}
          underlineColorAndroid='transparent'
          placeholder='Your Password:'
          placeholderTextColor='#9a72ef'
          autoCapitalize='none'
          keyboardType='default'
          // bao mat text khi go vao
          secureTextEntry={true}
          onChangeText={this.handlPassword} />

        <TouchableOpacity
          style={styles.RegisterButton}
          onPress={() => {this.login(this.state.yourName)}}>
          <Button
            title="Register"
            onPress={() => {this.props.navigation.navigation("login")}}
          />
        </TouchableOpacity>
      </View>
    );
    
  }
}
const Styles = StyleSheet.create({
  container: {
    paddingTop: 23
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1
  },
  RegisterButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
  },
  loginButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
  },
  textShowBellowInput: {
    marginLeft: 20,
    color: 'blue'
  },

});
