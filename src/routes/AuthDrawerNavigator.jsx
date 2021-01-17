import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const {Navigator, Screen} = createDrawerNavigator();

import Events from '../pages/Events'
import Users from '../pages/Users'

export default function App() {
  return (
      <Navigator>
        
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