import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
class ControlPanel extends Component {
  gotoCategory () {
    const { navigate } = this.props
    navigate('Category', {name: 'tu menu'})
  }
  render () {
    console.log(this.props.navigate)
    return (
      <View style={css.wapper}>
        <Text style={css.text}>
          OK men
        </Text>
        <Button onPress={this.gotoCategory.bind(this)} title='Cat' color='black' />
      </View>
    )
  }
}

let css = StyleSheet.create({
  wapper: {
    flex: 1,
    backgroundColor: '#444231'
  },
  text: {
    color: 'white'
  }
})

export default ControlPanel
