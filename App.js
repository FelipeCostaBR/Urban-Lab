import { StatusBar } from 'expo-status-bar';
import React from 'react';

import NotAuthStack from './src/routes/NotAuthStack'

import {createAppContainer} from "react-navigation"
import {createStackNavigator} from "react-navigation-stack"
import LoginScreen from "./src/pages/Chat/LoginScreen"
import ChatScreen from "./src/pages/Chat/ChatScreen"

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Chat: ChatScreen
  },
  {
    headerMode: 'none'
  }
)

export default createAppContainer (AppNavigator)

// export default function App() {
//   return (
//   <>    
//     <NotAuthStack />
    
//     <StatusBar style='auto' />
//   </>
//   );
// }

