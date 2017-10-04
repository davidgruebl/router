/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native'

const Home = () => <View style={styles.container}>
  <Text style={styles.welcome}>
    Welcome to React Native!
  </Text>
  <Text style={styles.instructions}>
    To get started, edit index.ios.js
  </Text>
  <Text style={styles.instructions}>
    Press Cmd+R to reload,{'\n'}
    Cmd+D or shake for dev menu
  </Text>
  <Link
    to="/about"
    underlayColor='#f0f4f7'>
      <Text>About</Text>
  </Link>
</View>

const About = () => <View style={{flex: 1, backgroundColor: 'pink'}}>
  <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
    <Link
      to="/"
      underlayColor='#f0f4f7'>
      <Text>Yolo</Text>
    </Link>
  </View>
</View>

const App = () => <NativeRouter>
  <View style={{flex: 1}}>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
  </View>
</NativeRouter>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('router', () => App);