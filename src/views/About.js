import React from 'react'
import {Text, View} from 'react-native'
import {Link} from 'react-router-native'

const About = () => <View style={{flex: 1, backgroundColor: 'green'}}>
  <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
    <Link
      to='/'
      underlayColor='#f0f4f7'>
      <Text>Home</Text>
    </Link>
    <Link
      to='/legal'
      underlayColor='#f0f4f7'>
      <Text>Legal</Text>
    </Link>
  </View>
</View>

export default About
