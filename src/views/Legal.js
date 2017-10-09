import React from 'react'
import {Text, View} from 'react-native'
import {Link} from 'react-router-native'
import Back from '../components/Back'

const Legal = () => <View style={{flex: 1, backgroundColor: 'pink'}}>
  <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
    <Link
      to='/'
      underlayColor='#f0f4f7'>
      <Text>Home</Text>
    </Link>
    <Link
      to='/about'
      transition=''
      underlayColor='#f0f4f7'>
      <Text>About</Text>
    </Link>
    <Back><Text>Back</Text></Back>
  </View>
</View>

Legal.transition = 'someCustomTransition'

export default Legal
