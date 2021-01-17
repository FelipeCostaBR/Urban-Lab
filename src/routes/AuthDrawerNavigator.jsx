import React from 'react';
import {SafeAreaView, ScrollView, Dimensions} from 'react-native'
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';

const {Navigator, Screen} = createDrawerNavigator();

import Events from '../pages/Events'
import Users from '../pages/Users'
import Profile from '../pages/Profile'

export default function App() {
  return (
      <Navigator
      drawerStyle={{
        backgroundColor: "#3A3C3A",
      }}
      drawerContentOptions={{
        activeTintColor: "#05FD51"
      }}
      >
    
        <Screen 
          name="Profile" 
          component={Profile} 
          options={{
            title: "Perfil",
          }}
        />

        <Screen 
          name="Events" 
          component={Events} 
          options={{
            title: "Eventos"
          }}
        />
        
        <Screen 
          name="Users" 
          component={Users} 
          options={{
            title: "Usuários"
          }}
        />
      

      </Navigator>
  );
}