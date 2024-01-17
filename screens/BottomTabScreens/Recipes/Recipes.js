import {View, Text, Platform, ScrollView} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import {styles} from './Recipes.styles';
import axios from 'axios';
import RecipeCard from '../../../components/RecipeCard/RecipeCard';
import {useNavigation} from '@react-navigation/native';
import FilterButton from '../../../components/FilterButton/FilterButton';
import {useNetInfo} from '@react-native-community/netinfo';
import {AuthContext} from '../../../Context/authContext';

const Recipes = () => {
  const {recipes, cuisine, allRecipes, setRecipes} = useContext(AuthContext);

  const size = 20;
  const color = '#3A865A';
  const navigation = useNavigation();

  // ^NEED TO IMPLEMENT CATEGORIES LATER
  // let category;

  {
    /* add a new category on the Schema and MongoDB - meal, drinks, dessert and have a different icon for each one */
  }
  // const meal = (
  //   <MaterialCommunityIcons
  //     name={'bowl-mix-outline'}
  //     size={size}
  //     color={color}
  //   />
  // );
  // const dessert = (
  //   <MaterialCommunityIcons
  //     name={'cake-variant-outline'}
  //     size={size}
  //     color={color}
  //   />
  // );
  // const drink = (
  //   <MaterialCommunityIcons name={'glass-cocktail'} size={size} color={color} />
  // );

  // There is a big difference with how to connect to the Android emulator and iOS connects to the DB
  const localhost = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';

  // need to place this in  custom hook so it only needs to be imported to use it
  // const netInfo = useNetInfo();
  // const ip = netInfo?.details?.ipAddress;
  // console.log(netInfo.details);

  // if (Platform.OS === 'ios' && ip) {
  //   console.log('ios ip', ip);
  // } else if (Platform.OS === 'android' && ip) {
  //   console.log('android ip', ip);
  // } else {
  //   console.log('ip', ip);
  // }
  // console.log(allRecipes, 'all Recipes');
  useEffect(() => {
    async function getRecipes() {
      // get all the Recipes
      if (allRecipes && cuisine === null) {
        // try {
        //   await axios
        //     .get(`http://${localhost}:3000/recipes/`)
        //     .then(res => setAllRecipes(res.data));
        // } catch (err) {
        //   console.error({error: err.message});
        // }
        // console.log(allRecipes);
      } else if (cuisine !== null) {
        try {
          await axios
            // I had the colons so it wasn't working
            .get(`http://${localhost}:3000/recipes/${cuisine}`)
            .then(res => {
              setRecipes(res.data);
            });
        } catch (err) {
          console.error({error: err.message});
        }
      }
    }
    getRecipes();
  }, [cuisine]);

  return (
    <ScrollView
      style={{
        flex: 1,
        margin: 20,
        marginTop: 10,
      }}>
      {/* This is where the information will be shown for the Recipes - have a filter to sort them from A-Z and reverse */}

      <ScrollView horizontal={true}>
        <FilterButton />
      </ScrollView>
      {!cuisine
        ? allRecipes.map(recipe => {
            // was not showing on the screen because I didn't have the return keyword
            return (
              // the first element needs to receive the unique id
              <View key={recipe._id}>
                <View style={styles.list}>
                  {/* This wouldn't appear later because if it is already in the database then we will have the category just passed as recipe.category */}
                  {/* {
                    recipe.dishName === 'frozen lumpia' ? category = drink : category = meal
                  } */}

                  <RecipeCard
                    recipe={recipe}
                    // need to add this in Mongoose Schema and MongoDB
                    // category={category}
                    // cover photo
                    // category={recipe.category}
                    // recipe only shows one recipe, which is the specific recipe
                    onPressRecipe={() =>
                      navigation.navigate('Recipe Details', {
                        recipe: recipe,
                      })
                    }
                    // refine params
                    onPressUsername={() =>
                      navigation.navigate('User Profile', {
                        username: recipe.addedBy,
                      })
                    }
                  />
                </View>
              </View>
            );
          })
        : recipes?.map(recipe => {
            return (
              <View key={recipe._id}>
                <View style={styles.list}>
                  <RecipeCard
                    recipe={recipe}
                    onPressRecipe={() =>
                      navigation.navigate('Recipe Details', {
                        recipe: recipe,
                      })
                    }
                    onPressUsername={() =>
                      navigation.navigate('User Profile', {
                        username: recipe.addedBy,
                      })
                    }
                  />
                </View>
              </View>
            );
          })}
    </ScrollView>
  );
};

export default Recipes;
