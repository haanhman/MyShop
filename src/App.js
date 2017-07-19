import { AppRegistry, StatusBar } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Home from './Home/Home'
import Category from './Category/Category'

StatusBar.setHidden(true)

const Menu = StackNavigator({
  Home: { screen: Home },
  Category: { screen: Category }
})

AppRegistry.registerComponent('MyShop', () => Menu)
