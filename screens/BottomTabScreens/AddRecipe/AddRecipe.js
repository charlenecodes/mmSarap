import { Text, View, ScrollView, Pressable, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './AddRecipe.styles';
import axios from 'axios';
import CustomButton from '../../../components/CustomButton/CustomButton';
import RecipeCard from '../../../components/RecipeCard/RecipeCard';
import H2 from '../../../components/Headers/H2';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AddRecipe = () => {
  const navigation = useNavigation();

  const [recipe, setRecipe] = useState({
    dishName: '',
    cuisine: '',
    ingredients: '',
    // instructions: [],
    // photos: []
  })

  const howTo = 'A preview of how your recipe shows will appear here once you start making changes. Make sure to add a comma followed by a space between ingredients and instructions so they appear on their own line.'

  const localhost = Platform.OS === 'android' ? '10.0.2.2' : 'localhost'

  // useEffect(() => {
  //   async function getRecipes() {
  //     try {
  // await axios.post(`http://${localhost}:3000/recipes/`, recipe, {
  // headers: {
  // 'Content-Type': 'application/json' 
  // }
  // })
  //         .then((res) => setRecipes(res.data))
  //     } catch (err) {
  //       console.error({ error: err.message })
  //     }
  //   }
  //   getRecipes()
  // }, [])

  // ? HOW TO: this wasn't working
  // name (string) has to match what you have in the state object and value has to match {object.key} inside curly brackets
  // what works in React doesn't work for react native
  // what we have in name in every text input matches everything that we will pass into handleChange
  // the value of a TextInput reflects what we have in our recipe object
  // need to figure out with the arrays - can I combine into one function?
  const handleChangeString = (name, text) => {
    setRecipe({
      ...recipe,
      [name]: text
    })
  }

  // we use split to turn the string into an array
  const handleChangeArray = (name, text) => {
    const stringToArray = text.split(", ")
    console.log(stringToArray)
    setRecipe({
      ...recipe,
      [name]: stringToArray
    })
  }

  // once we have the recipe object we can make a post request with axios
  const handleSubmit = () => {
    // up here add the code to add the recipe to the database
    // if there is an error should this be handled here or in the backend then just display the error in the frontend?
    // navigation.navigate('Recipes')
    console.log(recipe)
    setRecipe({
      dishName: '',
      cuisine: '',
      ingredients: '',
    })
  }

  return (
    <ScrollView
      style={styles.container}
    >
      {(!recipe.dishName && !recipe.cuisine) ? (<View>
        <Text style={[styles.label, { flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'center'}]}>{howTo}</Text>
      </View>) : (
        <View>
          {(recipe.dishName !== '') &&
            (
              <RecipeCard
                recipe={recipe}
                addedBy={'username'}
              />

            )
          }
          {
            (recipe.cuisine !== '') &&
            (
              <>
                <H2
                  text='Cuisine'
                />
                <Text>{recipe.cuisine}</Text>
              </>

            )
          }
          {
            (recipe.ingredients.length > 1) &&
            (
              <>
                <H2
                  text='Ingredients'
                />
                {recipe.ingredients.map((ingredient, index) => {
                  return (
                    <View
                      key={index}
                    >
                      <Text> {"-"} {ingredient.split(", ").join(" -")}</Text>
                    </View>
                  )
                })}
              </>
            )
          }
        </View>
      )

      }



      <Text style={styles.label}>Dish name</Text>
      {/* <View
        style={[{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}, styles.input]}
      > */}
      <TextInput
        style={[styles.input, { textTransform: 'capitalize' }]}
        name='dishName'
        value={recipe.dishName}
        onChangeText={(text) => handleChangeString('dishName', text)}
        autoCorrect={false}
      />
      {/* <Pressable>
          <MaterialIcons name={'cancel'} color={'gray'} size={20} />
        </Pressable>
      </View> */}

      <Text style={styles.label}>Cuisine</Text>
      <TextInput
        style={styles.input}
        name='cuisine'
        value={recipe.cuisine}
        onChangeText={(text) => handleChangeString('cuisine', text)}
        autoCorrect={false}
      />

      <Text style={styles.label}>Ingredients</Text>
      <TextInput
        style={styles.input}
        name='ingredients'
        value={recipe.ingredients}
        onChangeText={(text) => handleChangeArray('ingredients', text)}
        multiline={true}
        textAlignVertical={'top'}
        autoCorrect={false}
        autoCapitalize='sentences'
      />
      {/* 
      <Text style={styles.label}>Instructions</Text>
      <TextInput
        style={styles.input}
        name='instructions'
        value={recipe.instructions}
        onChange={handleChange}
        label={'Instructions'}
        multiline={true}
        textAlignVertical={'top'}
        autoCorrect={false}
        autoCapitalize='sentences'
      /> */}

      <CustomButton
        style={styles.submit}
        text={'Submit'}
        onPress={handleSubmit}
      />





    </ScrollView>
  )
}

export default AddRecipe
