
import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './BottomTab.styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Recipes from '../../screens/Recipes/AddRecipe';
import Home from '../../screens/Home/Home';
import AddRecipe from '../../screens/Recipes/AddRecipe';
import Profile from '../../screens/Profile/Profile';

const Tab = createBottomTabNavigator();

// Home, AllRecipes, Add a Recipe, Profile
const BottomTab = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen 
            name="Home" 
            component={Home}
        />
        <Tab.Screen 
            name="Recipes" 
            component={Recipes}
        />
        <Tab.Screen 
            name="AddRecipe" 
            component={AddRecipe}
        />
        <Tab.Screen 
            name="Profile" 
            component={Profile}
        />
    </Tab.Navigator>
  )
}

export default BottomTab