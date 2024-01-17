import {Text, View, ScrollView, Pressable, Dimensions} from 'react-native';
import React, {useEffect, useContext} from 'react';
import {styles} from './Profile.styles';
import axios from 'axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from '../../../Context/authContext';
import Login from '../../Login/Login';

// This should display all the recipes from the logged in user like an instagram grid
const Profile = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const {allRecipes, setRecipes, isLoggedIn, currentUser} =
    useContext(AuthContext);

  // this returns the amount of recipes this specific user has posted
  const numberOfRecipes = allRecipes?.filter(
    recipe => recipe.addedBy === currentUser.username,
  ).length;
  const numberOfFavorites = 0;

  // this returns the recipes this specific user has posted
  const userRecipes = allRecipes?.filter(
    recipe => recipe.addedBy === currentUser.username,
  );

  const localhost = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';

  useEffect(() => {
    async function getRecipes() {
      try {
        await axios
          .get(`http://${localhost}:3000/recipes/${currentUser.username}`)
          .then(res => {
            setRecipes(res.data);
          });
      } catch (err) {
        console.error({error: `${err.message} from Profile`});
      }
    }

    getRecipes();
  }, [currentUser]);

  return (
    <ScrollView style={styles.container}>
      {isLoggedIn ? (
        <View>
          <View style={styles.header}>
            <FontAwesome name={'user-circle'} color={'gray'} size={80} />

            <View style={styles.detailPosition}>
              <Text style={styles.count}>
                {/* change this so that we will get the number of recipes here */}
                {numberOfRecipes}
              </Text>
              <Text>{numberOfRecipes > 1 ? 'recipes' : 'recipe'}</Text>
            </View>
            <View style={styles.detailPosition}>
              <Text style={styles.count}>
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
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
                marginTop: 20,
                flex: 1,
              }}>
              {/* DISPLAY THE LOGGED IN USERS RECIPES HERE */}
              {userRecipes.map((recipe, index) => {
                recipe.createdBy === currentUser.username;
                return (
                  <Pressable
                    key={index}
                    onPress={() => {
                      navigation.navigate('Recipe Details', {
                        recipe: recipe,
                      });
                    }}>
                    <View
                      style={{
                        width: windowWidth * 0.32,
                        height: windowWidth * 0.32,
                        backgroundColor: '#3A865A',
                        alignContent: 'space-between',
                        margin: 0.3,
                        flex: 1,
                        flexGrow: 1,
                      }}>
                      <Text
                        style={{
                          fontSize: 18,
                          color: 'white',
                          flex: 1,
                          textAlign: 'center',
                          margin: 5,
                        }}>
                        {recipe.dishName[0].toUpperCase() +
                          recipe.dishName.substring(1)}
                      </Text>
                    </View>
                  </Pressable>
                );
              })}
            </View>
          </ScrollView>
        </View>
      ) : (
        <View>
          <Login />
        </View>
      )}
    </ScrollView>
  );
};

export default Profile;
