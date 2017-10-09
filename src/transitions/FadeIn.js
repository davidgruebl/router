import React, {Component} from 'react'
import {Animated, View} from 'react-native'
import PropTypes from 'prop-types'

export default class FadeIn extends Component {
  static propTypes = {
    children: PropTypes.element,
    previousChildren: PropTypes.element
  }
  state = {
    anim: new Animated.Value(0)
  }
  start = () => new Promise(resolve => Animated.timing(this.state.anim, {
    toValue: 1,
    duration: 250
  }).start(() => {
    this.state.anim.resetAnimation()
    resolve()
  }))
  render () {
    const {children, previousChildren} = this.props

    return <View style={abs}>
      <View style={abs}>
        {previousChildren || children}
      </View>
      {!!previousChildren &&
        <Animated.View style={[abs, {
          opacity: this.state.anim
        }]}>
          {children}
        </Animated.View>
      }
    </View>
  }
}

const abs = {
  flex: 1,
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}
