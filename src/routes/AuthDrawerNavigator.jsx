import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const {Navigator, Screen} = createDrawerNavigator();

// import Events from '../pages/Events'
import Users from '../pages/Users'
import Profile from '../pages/Profile'
import UserProfile from '../pages/UserProfile'
import Map from '../pages/MapScreen'

export default function App() {
  return (
      <Navigator
      drawerStyle={{
        backgroundColor: "#3A3C3A",
      }}
      drawerContentOptions={{
        activeTintColor: "#05FD51",
        inactiveTintColor: "#fff"
      }}
      >

        <Screen 
          name="Map" 
          component={Map} 
          options={{
            title: "Mapa",
          }}
        />

        <Screen 
          name="Profile" 
          component={Profile} 
          options={{
            title: "Perfil",
          }}
        />
{/* 
        <Screen 
          name="Events" 
          component={Events} 
          options={{
            title: "Eventos"
          }}
        /> */}
        
        <Screen 
          name="Users" 
          component={Users} 
          options={{
            title: "Usuários"
          }}
        />
        
        <Screen 
          name="UserProfile" 
          component={UserProfile} 
          options={{
            title: "Logout"
          }}
        />
      

      </Navigator>
  );
}