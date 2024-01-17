import {View, Text, Image, Pressable} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import PressableHeader from '../PressableHeader/PressableHeader';
import {styles} from './RecipeCard.styles';
import Octicons from 'react-native-vector-icons/Octicons';
import {AuthContext} from '../../Context/authContext';

// This is what we
export default function RecipeCard({
  onPressRecipe,
  onPressUsername,
  recipe,
  category,
  addedBy,
}) {
  // how to use this so all the favorite recipes can be shown in one place?

  const {isFavorite, addToFavorites, removeFromFavorites, toggleFavorite} =
    useContext(AuthContext);

  // ^need to work on favorites
  useEffect(() => {
    // if (!isFavorite) {
    //   console.log(recipe);
    //   setFavorites([
    //     ...favorites,
    //     {
    //       id: recipe._id,
    //       dishName: recipe.dishName,
    //     },
    //   ]);
    // } else {
    //   console.log('here are the favorites', favorites);
    // }
  }, []);

  return (
    <View style={styles.container}>
      <Pressable onPress={onPressRecipe}>
        <Image
          source={require('../../images/lumpia.jpg')}
          style={styles.cover}
        />
      </Pressable>

      <View style={styles.cardDetails}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <PressableHeader
            header={recipe.dishName}
            fontSize={20}
            color={'#3A865A'}
            addedBy={recipe.addedBy || addedBy}
            category={category}
            onPress={onPressRecipe}
            instructions={recipe.instructions}
          />
          <Pressable
            onPress={() => {
              toggleFavorite(recipe.dishName, recipe._id);
            }}>
            <Octicons
              name={isFavorite ? 'heart-fill' : 'heart'}
              size={25}
              color={isFavorite ? 'tomato' : 'gray'}
            />
          </Pressable>
        </View>

        <Pressable onPress={onPressUsername}>
          <Text style={[styles.text, {color: 'gray'}]}>
            by <Text style={styles.username}>{recipe.addedBy}</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
