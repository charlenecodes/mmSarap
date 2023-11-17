import React, {useState} from 'react';
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
import Login from '../screens/Login/Login';
import Stacks from '../Navigation/Stacks/Stacks';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        // style={backgroundStyle}
      >
        <NavigationContainer>
          {
            isLoggedIn ? <Stacks/> : <Login/>
          }
        </NavigationContainer>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
