import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {TouchableHighlight} from 'react-native'

export default class Back extends Component {
  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.shape({
        goBack: PropTypes.func.isRequired
      }).isRequired
    }).isRequired
  }

  static propTypes = {
    component: PropTypes.func,
    onPress: PropTypes.func
  }

  static defaultProps = {
    component: TouchableHighlight
  }

  handlePress = (event) => {
    if (this.props.onPress) { this.props.onPress(event) }

    if (event.defaultPrevented) return

    const {history} = this.context.router

    history.goBack()
  }

  render () {
    const {component: Component, ...rest} = this.props
    return <Component {...rest} onPress={this.handlePress} />
  }
}
