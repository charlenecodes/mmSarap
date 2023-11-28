
import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './BottomTab.styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Recipes from '../../screens/Recipes/Recipes';
import Home from '../../screens/Home/Home';
import AddRecipe from '../../screens/AddRecipe/AddRecipe';
import Profile from '../../screens/Profile/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const Tab = createBottomTabNavigator();

// Home, AllRecipes, Add a Recipe, Profile
export const BottomTab = () => {
  return (
    <Tab.Navigator
        screenOptions={{
          headerShown: false,
          // color of the text under the icon
          tabBarActiveTintColor: '#3A865A',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            paddingTop: 10,
            height: 65
          },
          tabBarLabelStyle: {
            paddingBottom: 10,
            fontWeight: 600
          }
      }}
    >
        <Tab.Screen 
            name="Home" 
            component={Home}
            options={{
                tabBarIcon: ({ focused }) => (
                  <Ionicons name={focused ? 'home' : 'home-outline'} color={focused ? '#3A865A' : 'gray'} size={25} />
                ),
            }}
        />
        <Tab.Screen 
            name="Recipes" 
            component={Recipes}
            options={{
              tabBarIcon: ({ focused }) => (
                <MaterialCommunityIcons name='chef-hat' color={focused ? '#3A865A' : 'gray'} size={25} />
              ),
          }}
        />
        <Tab.Screen 
            name="Add Recipe" 
            component={AddRecipe}
            options={{
              tabBarIcon: ({ focused }) => (
                <Ionicons name={focused ? 'add-circle' : 'add-circle-outline'} color={focused ? '#3A865A' : 'gray'} size={25} />
              ),
          }}
        />
        <Tab.Screen 
            name="Profile" 
            component={Profile}
            options={{
              tabBarIcon: ({ focused }) => (
                <FontAwesome name={focused ? "user-circle" : "user-circle-o"} color={focused ? '#3A865A': 'gray'} size={25} /> 
              ),
          }}
        />
    </Tab.Navigator>
  )
}

export default BottomTab