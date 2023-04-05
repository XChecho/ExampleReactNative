import { StyleSheet, Text, View } from 'react-native';

//Expo
import { StatusBar } from 'expo-status-bar';

//Router
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationStack from './src/router/NavigationStack';
import NavigationTab from './src/router/NavigationTab';
import NavigationDrawer from './src/router/NavigationDrawer';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* <NavigationStack/> */}
      {/* <NavigationTab/> */}
      <NavigationDrawer/>
    </NavigationContainer>
  );
}

export default App;

