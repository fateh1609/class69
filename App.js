import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import transactionScreen from './screens/transactionScreen';
import searchScreen from './screens/searchScreen';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";


export default class App extends React.Component {
  render() {
    return (
      
        <AppContainer />
   );
  }
}
const TabNavigator=createBottomTabNavigator({
  transaction:{screen: transactionScreen},
  search:{screen: searchScreen}
})

const AppContainer=createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
