import {StyleSheet, Text, Pressable, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function FilterButton({cuisine, setCuisine}) {
  // returns the different cuisines
  const [cuisines, setCuisines] = useState([]);

  //^ SEND CUISINE to Recipes.js so that can be used to get the recipes only from the selected cuisine
  // ^ make it so that when reset filter is clicked then it will just default to showing all recipes

  const localhost = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';

  useEffect(() => {
    async function getCuisines() {
      // ^ somehow when the user clicks on one of the selection, the cuisine variable needs to be updated so the backend will search for recipes only under a certain category - if a filter is selected make sure to have a remove filter button to reset
      if (localhost) {
        try {
          await axios
            .get(`http://${localhost}:3000/recipes/cuisines`)
            .then(res => setCuisines(res.data));
        } catch (err) {
          console.error({error: err.message});
        }
      }
    }
    getCuisines();
  }, []);
  return (
    <View style={styles.container}>
      {cuisines.map((cuisine, index) => {
        return (
          <Pressable
            key={index}
            //^ how to only trigger one
            onPress={() => {
              // ^ what is the best way to print?
              if (index <= cuisines.length) setCuisine(cuisine);
            }}
            // ^ HOW TO MAKE THE STYLING ADAPT TO WHETHER IT WAS CLICKED OR NOT
            style={cuisine !== null ? styles.button : styles.buttonSelected}>
            <Text
              // try to customize it so that when the button is pressed it will have a different style
              style={cuisine !== null ? styles.text : styles.textSelected}>
              {cuisine}
            </Text>
          </Pressable>
        );
      })}
      {cuisine && (
        <Pressable
          onPress={() => {
            setCuisine(null);
          }}
          style={styles.resetButton}>
          <Text
            // try to customize it so that when the button is pressed it will have a different style
            style={styles.resetText}>
            Reset Filter
          </Text>
        </Pressable>
      )}
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
