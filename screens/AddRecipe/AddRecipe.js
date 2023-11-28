import { Text, View, Pressable, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './AddRecipe.styles';
import axios from 'axios';

const AddRecipe = () => {
  // const [recipe, setRecipe] = useState({
  //   dishName: '',
  //   cuisine: '',
  //   ingredients: [],
  //   instructions: [],
  //   photos: []
  // })

  // useEffect(() => {
  //   axios.post('https://localhost:3000/recipes/:username/')
  //     .then(res => { setRecipe(res.data) })
  //     .catch(err => console.log(err))
  // }, [])
  return (
    <View
      style={styles.container}
    >
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 30,
          paddingBottom: 10,
          color: '#3A865A'
        }}
      >Add Recipe</Text>

      <Text>Dish name</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 10,
          width: '80%',
          marginBottom: 10
        }}
      ></TextInput>

      <Text>Cuisine</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 10,
          width: '80%',
          marginBottom: 10
        }}
      ></TextInput>

      <Text>Ingredients</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 10,
          width: '80%',
          marginBottom: 10
        }}
      ></TextInput>

      <Pressable
        onPress={() => console.log('Clicked the add button')}
      >
        <View
          style={{
            backgroundColor: '#3A865A',
            paddingHorizontal: 20,
            paddingVertical: 5,
            // borderWidth: 1,
            borderRadius: 50,
            marginTop: 5
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 21
            }}
          >Submit</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default AddRecipe
