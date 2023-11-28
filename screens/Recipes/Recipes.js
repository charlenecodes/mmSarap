import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './Recipes.styles';
import axios from 'axios';

const Recipes = () => {
  const [recipes, setRecipes] = useState()

  const getRecipes = async () => {
    try {
      let data = await axios.get("https://10.0.2.2/3000/recipes/")
      setTimeout(() => {
        setRecipes(data)
      }, 2000)
    } catch(err) {
      console.error({ error: err.message })
    }
  }

  useEffect(() => {
    getRecipes()
  }, [])
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
      >Recipes</Text>
      <Text>{recipes}</Text>
    </View>
  )
}

export default Recipes
