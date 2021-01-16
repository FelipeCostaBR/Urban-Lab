import { StatusBar } from 'expo-status-bar';
import React from 'react';

import NotAuthStack from './src/routes/NotAuthStack'

export default function App() {
  return (
  <>    
    <NotAuthStack />
    
    <StatusBar style='auto' />
  </>
  );
}

