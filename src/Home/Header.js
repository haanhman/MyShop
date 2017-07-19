import React, { Component } from 'react'
import { View, Button, StyleSheet } from 'react-native'
class Header extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      selectedTab: 'home'
    }
  }

  openControlPanel () {
    const { onOpen } = this.props
    onOpen()
  }

  render () {
    console.log(this.props.navigate)
    return (
      <View style={css.wapper}>
        <Button onPress={this.openControlPanel.bind(this)} title='Show menu' color='#841584' />
      </View>
    )
  }
}

let css = StyleSheet.create({
  wapper: {
    height: 80,
    backgroundColor: 'gray'
  }
})

export default Header
