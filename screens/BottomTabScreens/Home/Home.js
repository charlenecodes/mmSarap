import {
  View,
  SafeAreaView,
  useColorScheme,
  ScrollView,
  Image,
  Text,
  Pressable,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {styles} from './Home.styles';
import PressableHeader from '../../../components/PressableHeader/PressableHeader';
import H1 from '../../../components/Headers/H1';
import {AuthContext} from '../../../Context/authContext';
import axios from 'axios';
import RecipeCard from '../../../components/RecipeCard/RecipeCard';

const Home = ({navigation}) => {
  const colorScheme = useColorScheme();

  // if (colorScheme === 'dark') console.log('dark mode')

  const isDark = colorScheme === 'dark';

  const {
    setCuisine,
    cuisines,
    setCuisines,
    cuisine,
    currentUser,
    isLoggedIn,
    favorites,
  } = useContext(AuthContext);

  const localhost = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';

  useEffect(() => {
    async function getCuisines() {
      if (!cuisines) {
        try {
          await axios
            .get(`http://${localhost}:3000/recipes/cuisines`)
            .then(res => setCuisines(res.data));
        } catch (err) {
          console.error({error: err.message});
        }
      }
    }
    getCuisines();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoggedIn && currentUser ? (
        <H1 text={`Hello, ${currentUser.name}!`} />
      ) : null}

      {favorites.length >= 1 &&
        favorites.map((favorite, index) => {
          return (
            <View key={index}>
              <PressableHeader
                onPress={() => navigation.navigate('Favorites')}
                header={'Favorites'}
                fontSize={20}
                color={'#3A865A'}
              />
              <ScrollView horizontal={true}>
                <View
                  style={{
                    margin: 5,
                    padding: 5,
                    width: 160,
                    height: 160,
                    paddingHorizontal: 8,
                    borderWidth: 2,
                    borderColor: '#3A865A',
                    backgroundColor: '#3A865A',
                    borderTopRightRadius: 20,
                  }}>
                  <Pressable onPress={() => console.log(cuisine)}>
                    <View>
                      <Text
                        style={{
                          // fontSize: 18,
                          color: 'white',
                          fontWeight: 'bold',
                        }}>
                        {favorite.name}
                      </Text>
                    </View>
                  </Pressable>
                </View>
              </ScrollView>
            </View>
          );
        })}

      {/* <View>
        <PressableHeader
          onPress={() => console.log('go to newly added recipe')}
          header={'Recents'}
          fontSize={20}
          color={'#3A865A'}
        />
        <ScrollView horizontal={true}>
          <View
            style={{
              margin: 5,
              padding: 5,
              width: 160,
              height: 160,
              paddingHorizontal: 8,
              borderWidth: 2,
              borderColor: '#3A865A',
              backgroundColor: '#3A865A',
              borderTopRightRadius: 20,
            }}>
            <Pressable onPress={() => console.log(cuisine)}>
              <View>
                <Text
                  style={{
                    // fontSize: 18,
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  sorted from the newest to the oldest - display 5?
                </Text>
              </View>
            </Pressable>
          </View>
        </ScrollView>
      </View> */}

      <View style={{marginBottom: 20}}>
        <PressableHeader
          onPress={() =>
            navigation.navigate('BottomTab', {
              screen: 'Recipes',
            })
          }
          header={'Explore by Cuisine'}
          fontSize={20}
          color={'#3A865A'}
        />
        <ScrollView horizontal={true}>
          {cuisines?.map(cuisine => {
            return (
              <View key={cuisine}>
                <Pressable
                  onPress={() => {
                    navigation.navigate('Recipes');
                    setCuisine(cuisine);
                  }}>
                  <View
                    style={{
                      margin: 5,
                      padding: 5,
                      width: 160,
                      height: 160,
                      paddingHorizontal: 8,
                      borderWidth: 2,
                      borderColor: '#3A865A',
                      backgroundColor: '#3A865A',
                      borderTopRightRadius: 20,
                    }}>
                    <View>
                      <Text
                        style={{
                          // fontSize: 18,
                          color: 'white',
                          fontWeight: 'bold',
                        }}>
                        {cuisine}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Home;
