
import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './BottomTab.styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Recipes from '../../screens/Recipes/AddRecipe';
import Home from '../../screens/Home/Home';
import AddRecipe from '../../screens/Recipes/AddRecipe';
import Profile from '../../screens/Profile/Profile';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const Tab = createBottomTabNavigator();

// Home, AllRecipes, Add a Recipe, Profile
export const BottomTab = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'green',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: { position: 'absolute'}
        }}
    >
        <Tab.Screen 
            name="Home" 
            component={Home}
            options={{
                tabBarIcon: ({ focused, color, size }) => (
                  <AntDesign name="home" color={focused ? 'green' : 'gray'} size={30} />
                ),
            }}
        />
        <Tab.Screen 
            name="Recipes" 
            component={Recipes}
            options={{
              // tabBarIcon: ({ focused, color, size }) => (
              //   <Feather name="home" color={focused ? 'green' : 'gray'} size={30} />
              // ),
          }}
        />
        <Tab.Screen 
            name="AddRecipe" 
            component={AddRecipe}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <AntDesign name="home" color={focused ? 'green' : 'gray'} size={30} />
              ),
          }}
        />
        <Tab.Screen 
            name="Profile" 
            component={Profile}
            options={{
              tabBarIcon: ({ focused }) => (
                <FontAwesome name="user-circle-o" color={focused ? 'green' : 'gray'} size={30} />
              ),
          }}
        />
    </Tab.Navigator>
  )
}

export default BottomTab