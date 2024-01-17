import {StyleSheet, Text, Pressable, View} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AuthContext} from '../../Context/authContext';

export default function FilterButton() {
  // returns the different cuisines
  const {cuisine, setCuisine, cuisines, setCuisines, allRecipes, setRecipes} =
    useContext(AuthContext);

  //^ SEND CUISINE to Recipes.js so that can be used to get the recipes only from the selected cuisine
  // ^ make it so that when reset filter is clicked then it will just default to showing all recipes

  const localhost = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';

  useEffect(() => {
    async function getCuisines() {
      try {
        await axios
          .get(`http://${localhost}:3000/recipes/cuisines`)
          .then(res => setCuisines(res.data));
      } catch (err) {
        console.error({error: err.message});
      }
    }
    getCuisines();
  }, []);
  return (
    <View style={styles.container}>
      {cuisine && (
        <Pressable
          // ^ HOW TO MAKE THE STYLING ADAPT TO WHETHER IT WAS CLICKED OR NOT
          style={styles.buttonSelected}
          onPress={() => {
            setCuisine(null);
            setRecipes(allRecipes);
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 3,
            }}>
            <Text
              // try to customize it so that when the button is pressed it will have a different style
              style={styles.textSelected}>
              {cuisine}
            </Text>
            <AntDesign name={'close'} color={'white'} />
          </View>
        </Pressable>
      )}
      {cuisine === null &&
        cuisines.map((cuisine, index) => {
          return (
            <Pressable
              key={index}
              onPress={() => {
                setCuisine(cuisine);
              }}
              style={styles.button}>
              <Text style={styles.text}>{cuisine}</Text>
            </Pressable>
          );
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    borderRadius: 20,
    borderWidth: 1.4,
    borderColor: '#3A865A',
    paddingHorizontal: 3,
    marginHorizontal: 3,
  },
  buttonSelected: {
    backgroundColor: '#3A865A',
    borderRadius: 20,
    borderWidth: 1.4,
    borderColor: '#3A865A',
    paddingHorizontal: 3,
    marginHorizontal: 3,
  },
  text: {
    color: '#3A865A',
    margin: 5,
    fontWeight: '600',
    textAlign: 'center',
  },
  textSelected: {
    color: 'white',
    margin: 5,
    fontWeight: '600',
    textAlign: 'center',
  },
  resetText: {
    color: 'white',
    margin: 5,
    fontWeight: '600',
    textAlign: 'center',
  },
  resetButton: {
    backgroundColor: 'tomato',
    borderRadius: 20,
    borderWidth: 1.4,
    borderColor: 'tomato',
    paddingHorizontal: 3,
    marginHorizontal: 3,
  },
});
