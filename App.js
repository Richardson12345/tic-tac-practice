/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation'
import {Platform, StyleSheet, Text, View} from 'react-native'
import Home from './src/components/home'
import Board from './src/components/board'
import Finish from './src/components/finish'
import Ladder from './src/components/ladder'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const RootStack = createStackNavigator({
  Home,
  Board,
  Finish,
  Ladder
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    title: 'WELLCOME TO MY TIC-TAC-TOE',
    headerStyle: {
      backgroundColor: 'blue'
    },
    headerTintColor: 'white'
  }
})

export default class App extends Component {
  render() {
    return (
      <RootStack/>
    );
  }
}
