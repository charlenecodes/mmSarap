import { Text, View, SafeAreaView, Platform, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './Recipes.styles';
import axios from 'axios';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RecipeCard from '../../../components/RecipeCard/RecipeCard';
import { useNavigation } from '@react-navigation/native';
import FilterButton from '../../../components/FilterButton/FilterButton';

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
        // await axios.get(`http://172.20.10.12:3000/recipes/`)
          .then((res) => setRecipes(res.data))
      } catch (err) {
        console.error({ error: err.message })
      }
    }
    getRecipes()
  }, [])

  // ^ AT THE TOP OF THE CARDS, CREATE A FILTER FOR ALL THE DIFFERENT CUISINES AND THEN WHEN THEY ARE CLICKED ONLY SHOW THE RECIPES THAT MATCH THE CUISINES - same with the home page show the different cuisines

  return (
    <SafeAreaView
      style={styles.container}
    >
      
      {/* This is where the information will be shown for the Recipes - have a filter to sort them from A-Z and reverse */}
      <ScrollView>
        {/* make the filter values appear only one time - then try to take care of the onPress that it affects what is being shown in the RecipeCards below */}
      <View
        style={{ flexDirection: 'row', marginBottom: 10, gap: 5 }}
      >
      {recipes?.filter((recipe) => recipe.cuisine).map((recipe) => {
          return (
            <View
              key={recipe._id}
              style={{ flexDirection: 'row'}}
            >
              <FilterButton 
                text={recipe.cuisine}
                onPress={console.log(`when clicked only show recipes that are ${recipe.cuisine}`)}
              />
            </View>

          )

        })}
      </View>
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
                  // recipe only shows one recipe, which is the specific recipe
                  onPressRecipe={() => navigation.navigate('Recipe Details', {
                    recipe: recipe,
                  })}
                  // refine params
                  onPressUsername={() => navigation.navigate('User Profile', {
                    username: recipe.addedBy,
                  })}
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
