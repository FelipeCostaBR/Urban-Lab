import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Text} from 'react-native'

import Login from './Login';
import Register from './Register';

const {Navigator, Screen} = createStackNavigator();

function LoginAndRegisterRoute() {
    return (
        <Navigator
        initialRouteName="Login"
        screenOptions={{
            headerShown: false
        }}
        >
            <Screen 
                name="Login" 
                component={Login} 
            />
            <Screen 
                name="Register" 
                component={Register}
            />
        </Navigator>    
    )
}

export default LoginAndRegisterRoute