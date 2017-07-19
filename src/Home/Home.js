import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Drawer from 'react-native-drawer'
import ControlPanel from '../Menu/ControlPanel'

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

  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };

  render () {
    const {name} = this.props
    const { navigate } = this.props.navigation
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        content={<ControlPanel navigate={navigate} />}
        tapToClose={true}
        openDrawerOffset={0.3}        
        >
        <View style={styles.wapper}>
        <Text style={styles.text}>
          Trang Home
        </Text>
        <Button onPress={this.gotoCategory.bind(this)} title='Category' color='black' />
        <Button onPress={this.openControlPanel} title='Show menu' />
      </View>
      </Drawer>
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
