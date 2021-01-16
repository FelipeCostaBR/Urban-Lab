import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import NotAuthBottomNavigation from './src/routes/NotAuthBottomNavigation'

export default function App() {
  return (
  <>    
    <NotAuthBottomNavigation />
    
    <StatusBar style="auto" />
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f32',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
