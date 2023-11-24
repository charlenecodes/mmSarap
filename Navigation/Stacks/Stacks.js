import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Login/Login';
import Register from '../../screens/Register/Register';
import Users from '../../screens/Users/Users';
import UserProfile from '../../screens/UserProfile/UserProfile';
import BottomTab from '../BottomTab/BottomTab';

// create a forgot password screen and API
const Stack = createNativeStackNavigator();

const Stacks = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name='BottomTab' component={BottomTab} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Users' component={Users} />
        <Stack.Screen name='UserProfile' component={UserProfile} />
      </Stack.Navigator>
  )
}

export default Stacks