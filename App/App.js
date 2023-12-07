import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { styles } from './App.styles';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login/Login';
import Stacks from '../Navigation/Stacks/Stacks';

const Stack = createNativeStackNavigator();


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'light-content'}/>
      <NavigationContainer>
        
        {isLoggedIn ? <Stacks/> : <Login/>}
          
      </NavigationContainer>
    </SafeAreaProvider>
    
  );
}

export default App;