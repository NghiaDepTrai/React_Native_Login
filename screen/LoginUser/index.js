import React from "react";
import { Text, View, Button,StyleSheet,TextInput,TouchableOpacity } from "react-native";

export default class DetailsScreen extends React.Component {
  render() {
    
  state = {
    email: "",
    password: ""
  }
  handleEmail = (text) => {
    this.setState({ email: text });
  }
  handlePassword = (text) => {
    this.setState({ password: text });
  }

  alertMessage = (text) => {
    alert('Xin chuc mung ban dang nhap thanh cong !!!');
  }
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
          underlineColorAndroid='transparent'
          placeholder="Your Email:"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          keyboardType='email-address'
          onChangeText={this.handleEmail} />
        <Text style={Styles.textShowBellowInput}>{this.state.email}</Text>
        {/** password */}
        <TextInput style={styles.input}
          underlineColorAndroid='transparent'
          placeholder='Your Password:'
          placeholderTextColor='#9a72ef'
          autoCapitalize='none'
          keyboardType='default'
          secureTextEntry={true}
          onChangeText={this.handlePassword} />

        <TouchableOpacity
          style={styles.LoginButton}
          onPress={
            () => {this.login(this.state.yourName)}}>
          <Button
            title='Login'
            onPress={() => {this.props.navigation.goBack()}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 23
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1
  },
  LoginButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
  },
  textShowBellowInput: {
    marginLeft: 20,
    color: 'blue'
  },
  submetButtonText: {
    color: 'white'
  }
});