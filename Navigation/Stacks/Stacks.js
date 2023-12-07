import { Pressable } from 'react-native';
import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../../screens/Register/Register';
import Users from '../../screens/Users/Users';
import UserProfile from '../../screens/UserProfile/UserProfile';
import BottomTab from '../BottomTab/BottomTab';
import Favorites from '../../screens/Favorites/Favorites';
import Login from '../../screens/Login/Login';
import RecipeDetails from '../../screens/RecipeDetails/RecipeDetails';
import Recents from '../../screens/Recents/Recents';
import Octicons from 'react-native-vector-icons/Octicons';

// create a forgot password screen and API
const Stack = createNativeStackNavigator();

const Stacks = () => {
  const [isFavorite, setIsFavorite] = useState(false)

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
    // have extra code that if favorite is true it will be added to an array
    // right now when the state is true it is true for all the items
  }
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false,
        gestureEnabled: true,
        headerBackTitleVisible: false,
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3A865A',
        },

      }}
    >
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Users" component={Users} />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerShown: true,
          headerTitle: 'Favorites'
        }}
      />
  
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="Recipe Details"
        component={RecipeDetails}
        options={({ route }) => ({
          title: route.params.recipe.dishName,
          headerRight: () => (
            <Pressable
              onPress={toggleFavorite}
            >
              <Octicons name={isFavorite ? 'heart-fill' : 'heart'} size={25} color={isFavorite ? 'red' : '#3A865A'} />
            </Pressable>
          )
        })}
      />
      <Stack.Screen name="Recents" component={Recents} />
    </Stack.Navigator>
  )
}

export default Stacks