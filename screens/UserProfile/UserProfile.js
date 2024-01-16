import { Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './UserProfile.styles';
import axios from 'axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// This should display all the recipes similar to profile, but this will be when the logged in user clicks on the username from the Recipes tab
const UserProfile = ({ route }) => {
  const username = route?.params?.username;
  const [recipes, setRecipes] = useState(null)

  // this returns the amount of recipes this specific user has posted
  const numberOfRecipes =  recipes?.filter((recipe) => recipe.addedBy === username).length
  const numberOfFavorites = 3;

  const localhost = Platform.OS === 'android' ? '10.0.2.2' : 'localhost'

  useEffect(() => {
    async function getRecipes() {
      try {
        await axios.get(`http://${localhost}:3000/recipes/`)
          .then((res) => setRecipes(res.data))
      } catch (err) {
        console.error({ error: err.message })
      }
    }
    getRecipes()
  }, [])

  return (
    <View
      style={styles.container}
    >
      <View
        style={{ flexDirection: 'row', gap: 15, justifyContent: 'flex-start' }}
      >
        <FontAwesome
            name={"user-circle"}
            color={'gray'}
            size={80}
          />
        
    
        <View
          style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
        >
          <Text 
            style={{fontSize: 20, fontWeight: 'bold', alignItems: 'center'}}
          >
            {/* needed to put the condition inside parentheses so the condition will work */}
            {numberOfRecipes}
          </Text>
          <Text>{ (numberOfRecipes > 1) ? 'recipes' : 'recipe' }</Text> 
        </View>
        <View
          style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
        >
          <Text 
            style={{fontSize: 20, fontWeight: 'bold'}}
          >
            {/* change this so that we will get the number of recipes here */}
            {numberOfFavorites}
          </Text>
          <Text>{ (numberOfFavorites > 1) ? 'favorites' : 'favorite' }</Text> 
        </View>

        {/* 
        Would be a good addition later
        
        <View
          style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
        >
          <Text 
            style={{fontSize: 20, fontWeight: 'bold'}}
          >
            {numberOfFavorites}
          </Text>
          <Text>following</Text> 
        </View>

        <View
          style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
        >
          <Text 
            style={{fontSize: 20, fontWeight: 'bold'}}
          >
            {numberOfFavorites}
          </Text>
          <Text>{ (numberOfFavorites > 1) ? 'followers' : 'follower' }</Text> 
        </View> */}

      </View>
      {/* Maybe not even necessary
      
      <Text
        style={{ fontSize: 14, marginTop: 5, justifyContent: 'flex-start'}}
      >@{username}</Text> */}
    </View>

  )
}

export default UserProfile