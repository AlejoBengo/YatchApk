import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export default function NavigationStack() {
  return (
<Stack.Navigator initialRouteName="Home" >
<Stack.Screen name="Home" component={HomeScreen}/>
<Stack.Screen name="Settings" component={SettingsScreen}/>
</Stack.Navigator>
  )
}
