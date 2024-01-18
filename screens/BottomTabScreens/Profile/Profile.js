import {
  Text,
  View,
  ScrollView,
  Pressable,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {styles} from './Profile.styles';
import axios from 'axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from '../../../Context/authContext';
import Login from '../../Login/Login';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-toast-message';

// This should display all the recipes from the logged in user like an instagram grid
const Profile = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Recipe successfully deleted!',
      position: 'bottom',
      bottomOffset: windowHeight / 8,
      swipeable: true,
    });
  };
  const {
    allRecipes,
    setCuisines,
    setAllRecipes,
    setRecipes,
    isLoggedIn,
    currentUser,
  } = useContext(AuthContext);

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
        console.error({
          error: `${err.message}, error getting user's recipes from Profile`,
        });
      }
    }

    getRecipes();
  }, [currentUser]);

  async function deleteRecipe(id, name) {
    try {
      await axios
        .delete(
          `http://${localhost}:3000/recipes/${id}/${currentUser.username}`,
        )
        .then(res => {
          // res.data.allRecipes returns ALL the recipes after the specific one was removed
          setAllRecipes(res.data.allRecipes);
          setCuisines(res.data.allCuisines);
        })
        .then(
          setTimeout(() => {
            showToast();
          }, 1000),
        );
    } catch (err) {
      console.error({
        error: `${err.message}, error deleting ${name} from Profile`,
      });
    }
  }

  async function editRecipe(id) {
    // ^ NEEDS A NEW CATEGORY ON THE SCHEMA - MODIFIED ON
    // try {
    //   await axios
    //     .delete(
    //       `http://${localhost}:3000/recipes/${id}/${currentUser.username}`,
    //     )
    //     .then(res => {
    //       console.log(res.data);
    //     });
    // } catch (err) {
    //   console.error({
    //     error: `${err.message}, error deleting recipe from Profile`,
    //   });
    // }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
                {userRecipes.reverse().map((recipe, index) => {
                  recipe.createdBy === currentUser.username;
                  return (
                    <View key={index}>
                      <Pressable
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
                          <View
                            style={[
                              styles.icons,
                              {
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                marginTop: 5,
                                marginRight: 5,
                              },
                            ]}>
                            <Pressable
                              onPress={() =>
                                console.log('Edit', recipe.dishName)
                              }>
                              <MaterialCommunityIcons
                                style={{
                                  color: 'white',
                                  textAlign: 'right',
                                }}
                                name={'square-edit-outline'}
                                color={'white'}
                                size={30}
                              />
                            </Pressable>
                          </View>

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
                          <View
                            style={[
                              styles.icons,
                              {
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                marginBottom: 5,
                                marginLeft: 5,
                              },
                            ]}>
                            <Pressable
                              onPress={() => {
                                deleteRecipe(recipe._id, recipe.dishName);
                              }}>
                              <MaterialCommunityIcons
                                style={{
                                  color: 'white',
                                  textAlign: 'right',
                                }}
                                name={'delete'}
                                color={'white'}
                                size={30}
                              />
                            </Pressable>
                          </View>
                        </View>
                      </Pressable>
                    </View>
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
    </SafeAreaView>
  );
};

export default Profile;
