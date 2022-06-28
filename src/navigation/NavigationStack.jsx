import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

<<<<<<< Updated upstream:src/navigation/Navigation.jsx
export default function NavigationDrawer() {
   return (
      <Drawer.Navigator>
         <Drawer.Screen name='Home' component={HomeScreen} />
         <Drawer.Screen name='Settings' component={SettingsScreen} />
      </Drawer.Navigator>
   );
}
=======
export default function NavigationStack() {
  return (
<Stack.Navigator initialRouteName="Home" >
<Stack.Screen name="Home" component={HomeScreen}/>
<Stack.Screen name="Settings" component={SettingsScreen}/>
</Stack.Navigator>
  )
}
>>>>>>> Stashed changes:src/navigation/NavigationStack.jsx
