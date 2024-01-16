import {Text, View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './Profile.styles';
import axios from 'axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../../components/CustomButton/CustomButton';

// This should display all the recipes from the logged in user like an instagram grid
const Profile = ({route}) => {
  const username = route?.params?.username;
  const [recipes, setRecipes] = useState(null);

  // this returns the amount of recipes this specific user has posted
  const numberOfRecipes = recipes?.filter(
    recipe => recipe.addedBy === username,
  ).length;
  const numberOfFavorites = 3;

  const localhost = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';

  useEffect(() => {
    async function getRecipes() {
      try {
        await axios
          .get(`http://${localhost}:3000/recipes/`)
          .then(res => setRecipes(res.data));
      } catch (err) {
        console.error({error: err.message});
      }
    }
    getRecipes();
  }, []);

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View
        style={{flexDirection: 'row', gap: 15, justifyContent: 'flex-start'}}>
        <FontAwesome name={'user-circle'} color={'gray'} size={80} />

        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{fontSize: 20, fontWeight: 'bold', alignItems: 'center'}}>
            {/* change this so that we will get the number of recipes here */}
            {numberOfRecipes}
          </Text>
          <Text>{numberOfRecipes > 1 ? 'recipes' : 'recipe'}</Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            {/* change this so that we will get the number of recipes here */}
            {numberOfFavorites}
          </Text>
          {numberOfFavorites > 1 ? (
            <Text>favorites</Text>
          ) : (
            <Text>favorite</Text>
          )}
        </View>
      </View>
      <CustomButton text={'Log out'} />

      {/* {recipes?.filter((recipe) => recipe.addedBy === username).map((recipe) => {
        return (

          <View
            key={recipe._id}
          >
            <H2 text={`More Recipes from @${username}`} />

            <RecipeCard
              recipe={recipe}
            />
          </View>
        )
      })} */}
    </ScrollView>
  );
};

export default Profile;
