import React, {Component} from 'react'
import {AppRegistry} from 'react-native'
import {NativeRouter, Route, withRouter} from 'react-router-native'
import PropTypes from 'prop-types'

import findFirstMatch from './lib/findFirstMatch'
import FadeIn from './transitions/FadeIn'

import Home from './views/Home'
import About from './views/About'
import Legal from './views/Legal'

class SceenTransitioner extends Component {
  static propTypes = {
    children: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired
  }
  state = {
    children: findFirstMatch(this.props.children, this.props.location),
    previousChildren: null
  }
  componentWillReceiveProps (nextProps) {
    const {action} = nextProps.history // eslint-disable-line react/prop-types

    const children = findFirstMatch(this.props.children, nextProps.location)
    const previousChildren = findFirstMatch(this.props.children, this.props.location)

    // PUSH POP REPLACE
    const {transition = 'fade'} = action === 'POP'
      ? previousChildren.props.component
      : children.props.component

    this.setState({
      action,
      transition,
      previousChildren,
      children
    }, async () => {
      await this.animationComponent.start()
      this.setState({previousChildren: null})
    })
  }

  render () {
    const {children, previousChildren} = this.state

    // const Animation = allOurAnimations[transition][action]
    const Animation = FadeIn

    return <Animation
      ref={ref => (this.animationComponent = ref)}
      {...{children, previousChildren}}
    />
  }
}

const App = withRouter(SceenTransitioner)
const RoutedApp = () => <NativeRouter><App>
  <Route exact path='/' component={Home} />
  <Route path='/about' component={About} />
  <Route path='/legal' component={Legal} />
</App></NativeRouter>

AppRegistry.registerComponent('router', () => RoutedApp)
