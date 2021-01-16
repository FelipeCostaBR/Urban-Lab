import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

const {Navigator, Screen} = createBottomTabNavigator();

import Categories from '../pages/Categories'
import CheckProfileCategory from '../pages/CheckProfileCategory'
import AboutUs from '../pages/AboutUs'
import LoginAndRegister from '../pages/LoginAndRegister'

function NotAuthBottomNavigation() {
  return (
    <NavigationContainer>
      <Navigator
        tabBarOptions={{
          style: {
              elevation: 0,
              shadowOpacity: 0,
              height: 64,
          },
          tabStyle: {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
          },
          iconStyle: {
              flex: 0,
              width: 20,
              height: 20
          },
          labelStyle: {
              fontSize: 13,
              marginLeft: 16,
          },
          inactiveBackgroundColor: "#fafafc",
          activeBackgroundColor: "#ebebf5",
          inactiveTintColor: "#c1bccc",
          activeTintColor: "#32264d"
      }}
      >
        <Screen name="Categories" component={Categories} />
        <Screen name="CheckProfileCategory" component={CheckProfileCategory} />
        <Screen name="AboutUs" component={AboutUs} />
        <Screen name="LoginAndRegister" component={LoginAndRegister} />
      </Navigator>
    </NavigationContainer>
  );
}

export default NotAuthBottomNavigation