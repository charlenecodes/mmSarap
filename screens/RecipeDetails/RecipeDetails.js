import { View, ScrollView, Text, Image, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './RecipeDetails.styles';
import H2 from '../../components/Headers/H2';
import Link from '../../components/Link/Link';
import H1 from '../../components/Headers/H1';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import axios from 'axios';

export default function RecipeDetails({ route, navigation }) {
  // recipe contains the whole object, which cannot be displayed
  // this is the specific recipe that the user clicked on from the Recipes page
  const recipe = route.params.recipe;
  const username = route.params.username;
  const currentDish =route.params.currentDish;
  const [recipes, setRecipes] = useState(null);

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
    <ScrollView
      style={styles.container}
    >
      <Image
        source={require('../../images/lumpia.jpg')}
        style={styles.cover}
      />

      <H1 text={recipe.dishName} />

      <Pressable
        onPress={() => navigation.navigate('User Profile', {
          username: recipe.username
        })}
      >
        <Text>by <Text style={styles.username}>{recipe.addedBy}</Text></Text>
      </Pressable>

      <Text><H2 text={'Ingredients'} /> {"\n-"} {recipe.ingredients.join("\n- ")}</Text>
      <Text> <H2 text={'Instructions'} /> {"\n-"} {recipe.instructions.join("\n- ")}</Text>




      <View
        style={styles.suggestions}
      >
        {/* Make this so it is only displayed when a person has favorites and it will only display the recipes of the users the person has favorited */}
        {/* <H2 text={'Recommended Recipes'}/> */}

        {/* BEST ANSWER: 
        https://stackoverflow.com/questions/46862976/how-to-filter-array-of-objects-in-react-native 
        This section only shows if there's other recipes from the user, not including the current dish
        The logic with filter is that it returns the items that meet the condition that we have given
        Map just loops over the remainder items that came out of filter

        can also be stored in a variable, but this wouldn't help in this situation

        const recipesFromUser = recipes?.filter((recipe) => recipe.addedBy === username && recipe.dishName !== currentDish).map((recipe) => recipe)
        */}
        { recipes?.filter((recipe) => recipe.addedBy === username && recipe.dishName !== currentDish).map((recipe) => {
          return (
            
            <View
              key={recipe._id}
            >
              <H2 text={`More Recipes from @${recipe.addedBy}`} />

              <RecipeCard
                recipe={recipe}
              />
            </View>
          )
        })}

       


      </View>
    </ScrollView>
  )
}