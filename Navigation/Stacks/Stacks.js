import {Pressable, Text} from 'react-native';
import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from '../../screens/Register/Register';
import Users from '../../screens/Users/Users';
import UserProfile from '../../screens/UserProfile/UserProfile';
import BottomTab from '../BottomTab/BottomTab';
import Favorites from '../../screens/Favorites/Favorites';
import Login from '../../screens/Login/Login';
import RecipeDetails from '../../screens/RecipeDetails/RecipeDetails';
import Recents from '../../screens/Recents/Recents';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const Stacks = () => {
  // create a forgot password screen and API
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerBackTitleVisible: false,
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3A865A',
        },
        headerTitleStyle: {
          textTransform: 'capitalize',
        },
      }}>
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="User Profile"
        component={UserProfile}
        options={({route}) => ({
          headerTitle: '@' + route?.params?.username,
        })}
      />
      <Stack.Screen name="Users" component={Users} />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerShown: true,
          headerTitle: 'Favorites',
        }}
      />

      <Stack.Screen
        name="Recipe Details"
        component={RecipeDetails}
        options={({route}) => ({
          // needed to make header title into a function that returns the following so I can capitalize the dish name
          // I also had to import text and wrap it around it because using the headerTitleStyle was not working in this situation
          // inspected the other header titles that comes default with React Navigation to match the fontSize and weight
          headerTitle: () => (
            <Text
              style={{
                textTransform: 'capitalize',
                color: 'white',
                fontSize: 17,
                fontWeight: 600,
              }}>
              {route.params.recipe.dishName}
            </Text>
          ),
          presentation: 'modal',
          headerRight: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <AntDesign name={'close'} color={'white'} size={30} />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen name="Recents" component={Recents} />

      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default Stacks;
