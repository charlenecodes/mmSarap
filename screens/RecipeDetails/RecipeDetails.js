import {View, ScrollView, Text, Image, Pressable} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {styles} from './RecipeDetails.styles';
import H2 from '../../components/Headers/H2';
import H1 from '../../components/Headers/H1';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import axios from 'axios';
import Octicons from 'react-native-vector-icons/Octicons';
import {AuthContext} from '../../Context/authContext';

export default function RecipeDetails({route, navigation}) {
  // recipe contains the whole object, which cannot be displayed
  // this is the specific recipe that the user clicked on from the Recipes page
  const recipe = route.params.recipe;
  const username = route.params.recipe.addedBy;
  const currentDish = route.params.recipe.dishName;
  const [recipes, setRecipes] = useState(null);

  const localhost = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';
  const {favorites, toggleFavorite, currentUser} = useContext(AuthContext);

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
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <H1 text={recipe.dishName} fontSize={25} color={'#3A865A'} />

        {currentUser.username && (
          <Pressable
            style={{margin: 3}}
            onPress={() => {
              toggleFavorite(recipe);
            }}>
            <Octicons
              name={
                favorites.some(favorite => favorite === recipe)
                  ? 'heart-fill'
                  : 'heart'
              }
              size={25}
              color={
                favorites.some(favorite => favorite === recipe)
                  ? 'tomato'
                  : 'gray'
              }
            />
          </Pressable>
        )}
      </View>

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

      {currentUser.username &&
        !favorites.some(favorite => favorite === recipe) && (
          <Text style={{color: 'gray', marginVertical: 5, textAlign: 'left'}}>
            <Octicons name={'heart'} size={16} color={'gray'} /> to add to
            favorites!
          </Text>
        )}
      <Image source={require('../../images/lumpia.jpg')} style={styles.cover} />

      <Text>
        <H2 text={'Ingredients'} /> {'\n-'} {recipe.ingredients.join('\n- ')}
      </Text>
      <Text>
        {' '}
        <H2 text={'Instructions'} /> {'\n-'} {recipe.instructions.join('\n- ')}
      </Text>

      <View style={styles.suggestions}>
        {/* <H2 text={`More Recipes from @${recipe.addedBy}`} /> */}

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
                <RecipeCard
                  recipe={recipe}
                  // need to send an onPress so that the person can continue clicking to the next page, but not sure how this works
                  // onPressRecipe={navigation.push('Recipe Details', {
                  //   params: {
                  //     recipe: recipe,
                  //   },
                  // })}
                  // onPressUsername={() => navigation.navigate('User Profile')}
                  // addedBy={recipe.addedBy}
                />
              </View>
            );
          })}
      </View>
    </ScrollView>
  );
}
