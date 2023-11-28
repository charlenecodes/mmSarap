import { View, Text } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import UserProfile from '../../screens/UserProfile/UserProfile';
import Recipes from '../../screens/Recipes/Recipes';

const Tab = createMaterialTopTabNavigator();

export default function TopTab() {
  return (
    <Tab.Navigator>
        <Tab.Screen name={'User'} component={UserProfile} />
        {/* the component needs to be replaced later - this is just a test */}
        <Tab.Screen name={'My Recipes'} component={Recipes} />
    </Tab.Navigator>
  )
}