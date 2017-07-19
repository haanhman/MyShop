import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

class Home extends Component {    
  static navigationOptions = {
    header: null,
    title: 'Home screen'
  }

  constructor (props, context) {
    super(props, context)
  }

  gotoCategory () {
    const { navigate } = this.props.navigation
    navigate('Category', {name: 'Quan ao'})
  }

  render () {
    const {name} = this.props
    return (
      <View style={styles.wapper}>
        <Text style={styles.text}>
          Trang Home
        </Text>
        <Button onPress={this.gotoCategory.bind(this)} title='Category' color='black' />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  wapper: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 18
  }
})

export default Home
