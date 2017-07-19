import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
class TabProfile extends Component {
  render () {
    console.log(this.props.navigate)
    return (
      <View style={css.wapper}>
        <Text style={css.text}>
          Trang Profile
        </Text>
      </View>
    )
  }
}

let css = StyleSheet.create({
  wapper: {
    flex: 1,
    backgroundColor: 'blue'
  },
  text: {
    color: 'white'
  }
})

export default TabProfile
