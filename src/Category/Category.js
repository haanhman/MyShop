import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

class Category extends Component {
  gotoHome () {
    // const { navigate } = this.props.navigation
    // navigate('Home', {name: 'qua lai tu Category: Quan ao'})
    this.props.navigation.goBack()
  }

  render () {
    const { params } = this.props.navigation.state
    return (
      <View style={styles.wapper}>
        <Text style={styles.text}>
          Trang danh muc, {params.name}
        </Text>
        <Button onPress={this.gotoHome.bind(this)} title='Back to Home' color='blue' />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  wapper: {
    flex: 1,
    backgroundColor: '#F3DF49',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 18
  }
})

export default Category
