import { Text, View, SafeAreaView, Platform, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './Recipes.styles';
import axios from 'axios';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RecipeCard from '../../../components/RecipeCard/RecipeCard';
import { useNavigation } from '@react-navigation/native';

const Recipes = () => {
  const [recipes, setRecipes] = useState(null)
  const size = 20;
  const color = '#3A865A';
  const navigation = useNavigation();

  let category;

  {/* add a new category on the Schema and MongoDB - meal, drinks, dessert and have a different icon for each one */ }
  const meal = <MaterialCommunityIcons name={'bowl-mix-outline'} size={size} color={color} />
  const dessert = <MaterialCommunityIcons name={'cake-variant-outline'} size={size} color={color} />
  const drink = <MaterialCommunityIcons name={'glass-cocktail'} size={size} color={color} />

  // There is a big difference with how to connect to the Android emulator and iOS connects to the DB
  const localhost = Platform.OS === 'android' ? '10.0.2.2' : 'localhost'

  useEffect(() => {
    async function getRecipes() {
      try {
        // it wasn't working because it was https and I had a typo before 3000
        await axios.get(`http://${localhost}:3000/recipes/`)
          .then((res) => setRecipes(res.data))
      } catch (err) {
        console.error({ error: err.message })
      }
    }
    getRecipes()
  }, [])

  return (
    <SafeAreaView
      style={styles.container}
    >
      {/* This is where the information will be shown for the Recipes - have a filter to sort them from A-Z and reverse */}
      <ScrollView>
        {recipes?.map((recipe) => {
          // was not showing on the screen because I didn't have the return keyword
          return (
            // the first element needs to receive the unique id
            <View
              key={recipe._id}
            >
              <View
                style={styles.list}
              >

                {/* This wouldn't appear later because if it is already in the database then we will have the category just passed as recipe.category */}
                {/* {
                  recipe.dishName === 'frozen lumpia' ? category = drink : category = meal
                } */}

                <RecipeCard
                  recipe={recipe}
                  // need to add this in Mongoose Schema and MongoDB
                  category={category}
                  // cover photo
                  // category={recipe.category}
                  onPressRecipe={() => navigation.navigate('Recipe Details', {
                    recipe: recipe
                  })}
                  // refine params
                  onPressUsername={() => navigation.navigate('User Profile')}
                />

              </View>
            </View>

          )

        })}
      </ScrollView>
    </SafeAreaView >
  )
}

export default Recipes
