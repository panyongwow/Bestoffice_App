
//import  {RootStack} from './app/navigators/AppNavigators'
//import  {MainNavigator} from './app/navigators/AppNavigators'
//import {MainNavigator} from './app/navigators/MainNavigator'

//export default RootStack;


import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomePage from './app/containers/homepage';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen12</Text>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
        </View>
      );
    }
  }

const RootStack = createStackNavigator({
    Details:DetailsScreen,    
    Home:HomeScreen,
  },{
      initialRouteName:'Home'
  }
);

//export default RootStack;

export default class App extends React.Component {
    render() {
      return <RootStack />;
    }
  }


