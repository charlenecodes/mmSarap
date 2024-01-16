import {View, ScrollView, Text, Image, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './RecipeDetails.styles';
import H2 from '../../components/Headers/H2';
import H1 from '../../components/Headers/H1';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import axios from 'axios';
import Octicons from 'react-native-vector-icons/Octicons';

export default function RecipeDetails({route, navigation}) {
  // recipe contains the whole object, which cannot be displayed
  // this is the specific recipe that the user clicked on from the Recipes page
  const recipe = route.params.recipe;
  const username = route.params.recipe.addedBy;
  const currentDish = route.params.recipe.dishName;
  const [recipes, setRecipes] = useState(null);

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // have extra code that if favorite is true it will be added to an array
    // right now when the state is true it is true for all the items
    // need to identify it by the id so it will only be one item that will be set to favorite
    // would need to post to the backend so it updates everywhere - need to create isFavorite in the Schema and document
  };

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={toggleFavorite}>
          <Octicons
            name={isFavorite ? 'heart-fill' : 'heart'}
            size={25}
            color={isFavorite ? 'tomato' : 'white'}
          />
        </Pressable>
      ),
    });
  });

  // what can be possible to get the text casing that I want is to use React Navigation navigation.setOptions inside useEffect or useLayoutEffect
  // const HeaderTitle = () => {
  //   currentDish.toUppercase()
  // }

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerTitle: () => <HeaderTitle/>
  //   })
  // }, [])
  const localhost = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';

  useEffect(() => {
    async function getRecipes() {
      try {
        // it wasn't working because it was https and I had a typo before 3000
        await axios
          .get(`http://${localhost}:3000/recipes/`)
          .then(res => setRecipes(res.data));
      } catch (err) {
        console.error({error: err.message});
      }
    }
    getRecipes();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../../images/lumpia.jpg')} style={styles.cover} />

      <H1 text={recipe.dishName} />

      <Pressable
        onPress={() =>
          navigation.navigate('User Profile', {
            username: recipe.addedBy,
          })
        }>
        <Text>
          by <Text style={styles.username}>{recipe.addedBy}</Text>
        </Text>
      </Pressable>

      <Text>
        <H2 text={'Ingredients'} /> {'\n-'} {recipe.ingredients.join('\n- ')}
      </Text>
      <Text>
        {' '}
        <H2 text={'Instructions'} /> {'\n-'} {recipe.instructions.join('\n- ')}
      </Text>

      <View style={styles.suggestions}>
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
        {recipes
          ?.filter(
            recipe =>
              recipe.addedBy === username && recipe.dishName !== currentDish,
          )
          .map(recipe => {
            return (
              <View key={recipe._id}>
                <H2 text={`More Recipes from @${recipe.addedBy}`} />

                <RecipeCard
                  recipe={recipe}
                  // need to send an onPress so that the person can continue clicking to the next page, but not sure how this will work
                  // onPressRecipe={navigation.navigate("Recipe Details", {
                  //   params: {
                  //     recipe: recipe._id
                  //   }
                  // })}
                />
              </View>
            );
          })}
      </View>
    </ScrollView>
  );
}
