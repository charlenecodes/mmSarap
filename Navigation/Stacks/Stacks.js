import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../../screens/Register/Register';
import Users from '../../screens/Users/Users';
import UserProfile from '../../screens/UserProfile/UserProfile';
import BottomTab from '../BottomTab/BottomTab';
import Favorites from '../../screens/Favorites/Favorites';
import MyRecipes from '../../screens/MyRecipes/MyRecipes';
import Login from '../../screens/Login/Login';
import RecipeDetails from '../../screens/RecipeDetails/RecipeDetails';

// create a forgot password screen and API
const Stack = createNativeStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false,
        gestureEnabled: true,
        headerBackTitleVisible: false
      }}
    >
      <Stack.Screen 
        name="BottomTab" 
        component={BottomTab} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Users" component={Users} />
      <Stack.Screen name="User Profile" component={UserProfile} />
      <Stack.Screen 
        name="Favorites" 
        component={Favorites} 
        options={{
          headerShown: true,
          headerTitle: ''
        }}
      />
      <Stack.Screen 
        name="My Recipes" 
        component={MyRecipes} 
        options={{
          headerShown: true,
          headerTitle: ''
        }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Recipe Details" component={RecipeDetails} />
    </Stack.Navigator>
  )
}

export default Stacks