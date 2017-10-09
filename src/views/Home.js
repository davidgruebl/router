import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Link} from 'react-router-native'

const Home = () => <View style={styles.container}>
  <Text style={styles.welcome}>
    Welcome to React Native!
  </Text>
  <Link
    to='/about'
    underlayColor='#f0f4f7'>
    <Text>About</Text>
  </Link>
  <Link
    to='/legal'
    underlayColor='#f0f4f7'>
    <Text>Legal</Text>
  </Link>
</View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})

export default Home
