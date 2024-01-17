import React, {useState, useEffect} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Stacks from '../Navigation/Stacks/Stacks';
import {AuthContext} from '../Context/authContext';
import axios from 'axios';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  // returns the clicked cuisine
  const [cuisine, setCuisine] = useState(null);

  // list of cuisines for Filter button
  const [cuisines, setCuisines] = useState([]);

  // all recipes before any filter is applied
  const [allRecipes, setAllRecipes] = useState(null);

  // recipes with filter applied
  const [recipes, setRecipes] = useState(null);

  // array that contains the favorites
  const [favorites, setFavorites] = useState([]);

  // returns a boolean whether a recipe is favorited or not
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (name, id) => {
    setIsFavorite(!isFavorite);

    const recipeObject = {
      id: id,
      dishName: name,
    };

    const isInFavoritesArray = favorites.filter(
      favorite => favorite === recipeObject,
    );

    console.log(isInFavoritesArray);
  };

  const addToFavorites = (name, id) => {
    // console.log({name, id}, 'was added to favorite!');
    // have a filter here that checks whether the id is already on the favorites, if not then continue adding to favorites

    const recipeObject = {
      id: id,
      dishName: name,
    };

    const isInFavoritesArray = favorites.filter(
      favorite => favorite === recipeObject,
    );
    console.log(isInFavoritesArray, name, 'is already in favorites');
    if (!isInFavoritesArray) {
      setIsFavorite(true);

      setFavorites(favorites => [...favorites, recipeObject]);
    }
  };

  const removeFromFavorites = (name, id) => {
    const recipeObject = {
      id: id,
      dishName: name,
    };

    const isInFavoritesArray = favorites.filter(
      favorite => favorite === recipeObject,
    );

    console.log(isInFavoritesArray, 'from Remove');
    if (isInFavoritesArray) {
      setIsFavorite(false);
    }
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
  const localhost = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';

  useEffect(() => {
    async function getRecipes() {
      // get all the Recipes
      if (cuisine === null && allRecipes === null) {
        try {
          await axios
            .get(`http://${localhost}:3000/recipes/`)
            .then(res => setAllRecipes(res.data));
        } catch (err) {
          console.error({error: `Error in App.js ${err.message}`});
        }
      }
    }
    getRecipes();
  }, [cuisine]);

  return (
    <AuthContext.Provider
      value={{
        allRecipes,
        setAllRecipes,
        recipes,
        setRecipes,
        currentUser,
        setCurrentUser,
        isLoggedIn,
        setIsLoggedIn,
        cuisine,
        setCuisine,
        cuisines,
        setCuisines,
        favorites,
        setFavorites,
        addToFavorites,
        removeFromFavorites,
        toggleFavorite,
        logout,
      }}>
      <SafeAreaProvider>
        <StatusBar barStyle={'light-content'} />
        <NavigationContainer>
          <Stacks />
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthContext.Provider>
  );
}

export default App;
