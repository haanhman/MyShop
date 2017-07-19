import React, { Component } from 'react'
import { View, Text} from 'react-native'
import Drawer from 'react-native-drawer'
import ControlPanel from '../Menu/ControlPanel'
import HomeView from './HomeView'
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
          <HomeView open={this.openControlPanel.bind(this)}/>    
        </Drawer>         
    )
  }
}

export default Home
