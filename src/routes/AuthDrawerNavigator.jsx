import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const {Navigator, Screen} = createDrawerNavigator();

import Events from '../pages/Events'

export default function App() {
  return (
      <Navigator initialRouteName="Events">
        <Screen name="Events" component={Events} />
      </Navigator>
  );
}