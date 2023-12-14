import { Text, View, Pressable, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './AddRecipe.styles';
import axios from 'axios';
import InputField from '../../../components/InputField/InputField';
import CustomButton from '../../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const AddRecipe = () => {
  const navigation = useNavigation();

  const [recipe, setRecipe] = useState({
    dishName: '',
    cuisine: '',
    ingredients: [],
    instructions: [],
    photos: []
  })

  // const [dishName, setDishName] = useState('')
  // const [cuisine, setCuisine] = useState('')
  // const [ingredients, setIngredients] = useState('')
  // const [instructions, setInstructions] = useState('')

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
  // https://react.dev/learn/updating-objects-in-state#using-a-single-event-handler-for-multiple-fields
    // name (string) has to match what you have in the state object and value has to match {object.key} inside curly brackets
  const handleChange = (e) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value 
    })
  }

  const handleSubmit = () => {
    // up here add the code to add the recipe to the database
    // if there is an error should this be handled here or in the backend then just display the error in the frontend?
    // navigation.navigate('Recipes')
    console.log(recipe)
  }

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.label}>Dish name</Text>
      <TextInput
        style={[styles.input, { textTransform: 'capitalize'}]}
        name='dishName'
        value={dishName}
        onChange={(e) => handleChange(e.target.value)}
      />

      <Text style={[styles.input, { textTransform: 'capitalize'}]}>Cuisine</Text>
      <TextInput
        style={styles.input}
        name='cuisine'
        value={cuisine}
        onChange={(text) => setCuisine(text)}
      />

      <Text style={styles.label}>Ingredients</Text>
      <TextInput
        style={styles.input}
        name='ingredients'
        value={ingredients}
        onChange={handleChange}
        multiline={true}
        textAlignVertical={'top'}
      />

      <Text style={styles.label}>Instructions</Text>
      <TextInput
        style={styles.input}
        name='instructions'
        value={instructions}
        onChange={handleChange}
        label={'Instructions'}
        multiline={true}
        textAlignVertical={'top'}
      />
       
        <CustomButton
          style={styles.submit}
          text={'Submit'}
          onPress={handleSubmit}
        />
       
        

    </View>
  )
}

export default AddRecipe
