import { Text, View, Pressable, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './AddRecipe.styles';
import axios from 'axios';
import InputField from '../../../components/InputField/InputField';
import Button from '../../../components/Button/Button';

const AddRecipe = () => {
  // const [recipe, setRecipe] = useState({
  //   dishName: '',
  //   cuisine: '',
  //   ingredients: [],
  //   instructions: [],
  //   photos: []
  // })

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

  return (
    <View
      style={styles.container}
    >
      <InputField
        label={'Dish Name'}
        placeholder={'Enter the name of the dish'}
      />
      <InputField 
        label={'Cuisine'}
      />
      <InputField
        label={'Ingredients'}
        multiline={true}
        textAlignVertical={'top'}
        onKeyPress={({nativeEvent}) => console.log(nativeEvent.key)}
      />
      <InputField
        label={'Instructions'}
        multiline={true}
        textAlignVertical={'top'}
        onKeyPress={({nativeEvent}) => console.log(nativeEvent.key)}
      />
       
        <Button
          style={styles.submit}
          text={'Submit'}
          onPress={() => { console.log('Pressed submit') }}
        />
       
        

    </View>
  )
}

export default AddRecipe
