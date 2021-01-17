import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import {Image} from 'react-native'

const {Navigator, Screen} = createStackNavigator();

import Login from '../pages/Login'
import StepOne from '../pages//Register/StepOne'
import StepTwo from '../pages//Register/StepTwo'

import logoImg from '../assets/images/logo.png'


function NotAuthBottomNavigation() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        
        <Screen 
          name="Login" 
          component={Login} 
        />
        
        <Screen
          name="StepOne"
          component={StepOne}
        />
        
        <Screen
          name="StepTwo"
          component={StepTwo}
        />
        
      </Navigator>
    </NavigationContainer>
  );
}

export default NotAuthBottomNavigation