import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

const {Navigator, Screen} = createStackNavigator();

import Landing from '../pages/Landing'
import Login from '../pages/Login'
import Register from '../pages/Register'

function NotAuthBottomNavigation() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Screen name="Landing" component={Landing} />
        <Screen name="Login" component={Login} />
        <Screen name="Register" component={Register} />
      </Navigator>
    </NavigationContainer>
  );
}

export default NotAuthBottomNavigation