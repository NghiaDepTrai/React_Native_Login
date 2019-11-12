import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import RegisterUser from "./screen/RegisterUser/index";
import LoginUser  from "./screen/LoginUser/index";

const RootStack = createStackNavigator(
  {
    register: {
      screen:() => <RegisterUser/>
    },
    login: {
      screen:() => <LoginUser/>
    },
  },
  {
    initialRouteName: "register"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
