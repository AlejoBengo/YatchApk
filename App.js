import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/navigation/NavigationStack';
<<<<<<< Updated upstream

export default function App() {
   return (
      <NavigationContainer>
         <NavigationStack />
      </NavigationContainer>
   );
=======
import NavigationTab from './src/navigation/NavigationTab';
import NavigationDrawer from './src/navigation/NavigationDrawer';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      {/* <StatusBar/> */}
{/* <NavigationStack/> */}
{/* <NavigationTab/> */}
<NavigationDrawer/>
    </NavigationContainer>
  );
>>>>>>> Stashed changes
}
