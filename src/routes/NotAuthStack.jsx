import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import {Image} from 'react-native'

const {Navigator, Screen} = createStackNavigator();

import Login from '../pages/Login'
import Register from '../pages/Register'

import logoImg from '../assets/images/logo.png'

function Header() {
  return (
    <Image source={logoImg} style={{width: 150, resizeMode: 'contain', height: 120, marginLeft: 10}} />
  )
}

function NotAuthBottomNavigation() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen 
        name="Login" 
        component={Login} 
        options={{
          header: Header
        }}
        />
        <Screen name="Register" component={Register} />
      </Navigator>
    </NavigationContainer>
  );
}

export default NotAuthBottomNavigation