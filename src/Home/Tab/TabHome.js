import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
class TabHome extends Component {
  render () {
    console.log(this.props.navigate)
    return (
      <View style={css.wapper}>
        <Text style={css.text}>
          Trang Home
        </Text>
      </View>
    )
  }
}

let css = StyleSheet.create({
  wapper: {
    flex: 1,
    backgroundColor: 'green'
  },
  text: {
    color: 'white'
  }
})

export default TabHome
