import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import TabHome from './Tab/TabHome'
import TabProfile from './Tab/TabProfile'
import Header from './Header'
class HomeView extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      selectedTab: 'home'
    }
  }

  openMenu () {
    const { open } = this.props
    open()
  }

  render () {
    return (
      <View style={css.wapper}>
        <Header onOpen={this.openMenu.bind(this)} />
        <TabNavigator>
          <TabNavigator.Item 
          selected={this.state.selectedTab === 'home'} 
          title='Home' 
          onPress={() => this.setState({ selectedTab: 'home' })}
          renderIcon={() => <Image style={{width: 25, height: 25}} source={require('../../images/home-1.png')} />}
          renderSelectedIcon={() => <Image style={{width: 25, height: 25}} source={require('../../images/home-2.png')} />}
          >
            <TabHome />
          </TabNavigator.Item>
          <TabNavigator.Item 
          selected={this.state.selectedTab === 'profile'} 
          title='Profile' 
          onPress={() => this.setState({ selectedTab: 'profile' })}
          renderIcon={() => <Image style={{width: 25, height: 25}} source={require('../../images/profile-1.png')} />}
          renderSelectedIcon={() => <Image style={{width: 25, height: 25}} source={require('../../images/profile-2.png')} />}
          >
            <TabProfile />
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    )
  }
}

let css = StyleSheet.create({
  wapper: {
    flex: 1
  },
  text: {
    color: 'white'
  }
})

export default HomeView
