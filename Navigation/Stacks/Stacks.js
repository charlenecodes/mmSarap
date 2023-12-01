import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../../screens/Register/Register';
import Users from '../../screens/Users/Users';
import UserProfile from '../../screens/UserProfile/UserProfile';
import BottomTab from '../BottomTab/BottomTab';
import Favorites from '../../screens/Favorites/Favorites';
import UserRecipes from '../../screens/UserRecipes/UserRecipes';
import Login from '../../screens/Login/Login';
import RecipeDetails from '../../screens/RecipeDetails/RecipeDetails';
import Recents from '../../screens/Recents/Recents';

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
          headerTitle: 'Favorites'
        }}
      />
      <Stack.Screen 
        name="User Recipes" 
        component={UserRecipes} 
        // need to add later
        // options={({route}) => ({
        //   title: `${route.params.username}'s recipes`
        // })}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen 
        name="Recipe Details" 
        component={RecipeDetails}
        options={({route}) => ({
          title: route.params.recipe.dishName
        })}
      />
      <Stack.Screen name="Recents" component={Recents} />
    </Stack.Navigator>
  )
}

export default Stacks