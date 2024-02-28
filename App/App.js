import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Stacks from '../Navigation/Stacks/Stacks';
import {AuthContext} from '../Context/authContext';
import Toast from 'react-native-toast-message';

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

  const logout = () => {
    setCurrentUser({});
    setIsLoggedIn(false);
  };

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
