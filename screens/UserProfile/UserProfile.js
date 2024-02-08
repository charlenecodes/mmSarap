import {Text, View, ScrollView, Pressable, Dimensions} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {styles} from './UserProfile.styles';
import axios from 'axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import useRecipes from '../../hooks/useRecipes';
// This should display all the recipes similar to profile, but this will be when the logged in user clicks on the username from the Recipes tab
const UserProfile = ({route, navigation}) => {
  const username = route?.params?.username;

  const {allRecipes} = useRecipes();
  const windowWidth = Dimensions.get('window').width;

  // this returns the amount of recipes this specific user has posted
  const numberOfRecipes = allRecipes?.filter(
    recipe => recipe.addedBy === username,
  ).length;
  const numberOfFavorites = 0;

  const localhost = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';

  // this returns the recipes this specific user has posted
  const userRecipes = allRecipes?.filter(recipe => recipe.addedBy === username);

  return (
    <ScrollView style={styles.container}>
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
              recipe.createdBy === username;
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
    </ScrollView>
  );
};

export default UserProfile;
