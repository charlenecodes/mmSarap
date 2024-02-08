import React, {useState, useEffect} from 'react';
import {Platform, StatusBar, useColorScheme, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Stacks from '../Navigation/Stacks/Stacks';
import {AuthContext} from '../Context/authContext';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import {useNetInfo} from '@react-native-community/netinfo';
import useRecipes from '../hooks/useRecipes';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  // returns the clicked cuisine
  const [cuisineSelected, setCuisineSelected] = useState(null);

  // array that contains the favorites
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = recipe => {
    // ^TOGGLE FAVORITE IS TRIGGRED WHEN THE HEART IN RECIPE CARD IS CLICKED

    // ^ check if already in the favorites - depending on what this result is then we decide which action to take
    if (!favorites.some(favorite => favorite === recipe)) {
      addToFavorites(recipe);
    } else {
      removeFromFavorites(recipe);
    }
  };

  const addToFavorites = recipe => {
    setFavorites([...favorites, recipe]);
  };

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  const removeFromFavorites = recipe => {
    setFavorites(favorites.filter(favorite => favorite !== recipe));
  };

  // useColorScheme() is a React hook that checks whether the device is in dark or light mode
  // this code below returns a boolean - true if the device is in dark mode
  const isDarkMode = useColorScheme() === 'dark';

  // so it looks cleaner within the file you can make it like this and then
  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  const logout = () => {
    setCurrentUser({});
    setIsLoggedIn(false);
  };

  const ip = useNetInfo()?.details?.ipAddress;
  // console.log(useNetInfo());

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        isLoggedIn,
        setIsLoggedIn,
        cuisineSelected,
        setCuisineSelected,
        favorites,
        toggleFavorite,
        logout,
      }}>
      <SafeAreaProvider>
        <StatusBar barStyle={'light-content'} />
        <NavigationContainer>
          <Stacks />
        </NavigationContainer>
      </SafeAreaProvider>
      <Toast />
    </AuthContext.Provider>
  );
}

export default App;
