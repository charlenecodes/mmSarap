import {View, Platform, ScrollView} from 'react-native';
import React, {useContext} from 'react';
import {styles} from './Recipes.styles';
import RecipeCard from '../../../components/RecipeCard/RecipeCard';
import {useNavigation} from '@react-navigation/native';
import FilterButton from '../../../components/FilterButton/FilterButton';
import {useNetInfo} from '@react-native-community/netinfo';
import {AuthContext} from '../../../Context/authContext';
import useRecipes from '../../../hooks/useRecipes';

const Recipes = () => {
  const {allRecipes} = useRecipes();
  const {cuisineSelected} = useContext(AuthContext);

  const size = 20;
  const color = '#3A865A';
  const navigation = useNavigation();

  // There is a big difference with how to connect to the Android emulator and iOS connects to the DB
  const localhost = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';

  // need to place this in  custom hook so it only needs to be imported to use it
  // const netInfo = useNetInfo();
  // const ip = netInfo?.details?.ipAddress;
  // console.log(netInfo.details);

  // if (Platform.OS === 'ios' && ip) {
  //   console.log('ios ip', ip);
  // } else if (Platform.OS === 'android' && ip) {
  //   console.log('android ip', ip);
  // } else {
  //   console.log('ip', ip);
  // }

  return (
    <ScrollView
      style={{
        flex: 1,
        margin: 20,
        marginTop: 10,
      }}>
      <ScrollView horizontal={true}>
        <FilterButton />
      </ScrollView>
      {!cuisineSelected
        ? allRecipes.map(recipe => {
            // was not showing on the screen because I didn't have the return keyword
            return (
              <View key={recipe._id}>
                <View style={styles.list}>
                  <RecipeCard
                    recipe={recipe}
                    // need to add this in Mongoose Schema and MongoDB
                    // category={category}
                    // cover photo
                    // category={recipe.category}
                    // recipe only shows one recipe, which is the specific recipe
                    onPressRecipe={() =>
                      navigation.navigate('Recipe Details', {
                        recipe: recipe,
                      })
                    }
                    // refine params
                    onPressUsername={() =>
                      navigation.navigate('User Profile', {
                        username: recipe.addedBy,
                      })
                    }
                  />
                </View>
              </View>
            );
          })
        : allRecipes
            ?.filter(recipe => recipe.cuisine === cuisineSelected)
            .map(recipe => {
              return (
                <View key={recipe._id}>
                  <View style={styles.list}>
                    <RecipeCard
                      recipe={recipe}
                      onPressRecipe={() =>
                        navigation.navigate('Recipe Details', {
                          recipe: recipe,
                        })
                      }
                      onPressUsername={() =>
                        navigation.navigate('User Profile', {
                          username: recipe.addedBy,
                        })
                      }
                    />
                  </View>
                </View>
              );
            })}
    </ScrollView>
  );
};

export default Recipes;
