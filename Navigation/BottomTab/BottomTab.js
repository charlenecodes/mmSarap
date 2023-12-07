import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Recipes from '../../screens/BottomTabScreens/Recipes/Recipes';
import Home from '../../screens/BottomTabScreens/Home/Home';
import AddRecipe from '../../screens/BottomTabScreens/AddRecipe/AddRecipe';
import UserProfile from '../../screens/UserProfile/UserProfile';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const Tab = createBottomTabNavigator();

// Home, AllRecipes, Add a Recipe, Profile
export const BottomTab = () => {
  return (
    <Tab.Navigator
        screenOptions={{
          gestureEnabled: true,
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#3A865A',
          },
          // color of the text under the icon
          tabBarActiveTintColor: '#3A865A',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
            marginBottom: 2,
            fontWeight: 600,
          },
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

        {/* change this later so the header is changing based on the person's username */}
        <Tab.Screen 
            name="Profile" 
            component={UserProfile}
            options={({ route }) => ({
              // title: 'Profile',
              tabBarIcon: ({ focused }) => (
                <FontAwesome name={focused ? "user-circle" : "user-circle-o"} color={focused ? '#3A865A': 'gray'} size={25} /> 
              ),
            })}
        />
    </Tab.Navigator>
  )
}

export default BottomTab