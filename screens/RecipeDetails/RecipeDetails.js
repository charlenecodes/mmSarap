import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { styles } from './RecipeDetails.styles';

export default function RecipeDetails({ route, navigation }) {
  // recipe contains the whole object, which cannot be displayed 
  const recipe = route.params.recipe;

  return (
    <View
      style={styles.container}
    >
      <Image
        source={require('../../images/lumpia.jpg')}
        style={styles.cover}
      />
      <Text
        style={styles.header}
      >{recipe.dishName}  </Text>
      <Pressable
        onPress={() => navigation.navigate('User Profile', {
          username: recipe.username
        })}
      >
        <Text>by {recipe.addedBy}</Text>
      </Pressable>
      <Text style={[styles.text]}>Ingredients: {"\n-"} {recipe.ingredients.join("\n- ")}</Text>
      <Text style={[styles.text]}>Instructions: {"\n-"} {recipe.instructions.join("\n- ")}</Text>
    </View>
  )
}