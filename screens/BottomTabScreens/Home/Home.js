import {
  View,
  SafeAreaView,
  useColorScheme,
  ScrollView,
  Text,
  Pressable,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {styles} from './Home.styles';
import PressableHeader from '../../../components/PressableHeader/PressableHeader';
import H1 from '../../../components/Headers/H1';
import {AuthContext} from '../../../Context/authContext';
import useCuisines from '../../../hooks/useCuisines';

const Home = ({navigation}) => {
  const colorScheme = useColorScheme();

  // if (colorScheme === 'dark') console.log('dark mode')

  const isDark = colorScheme === 'dark';

  const {currentUser, isLoggedIn, favorites, setCuisineSelected} =
    useContext(AuthContext);

  const {allCuisines} = useCuisines();

  return (
    <SafeAreaView style={styles.container}>
      {isLoggedIn && currentUser ? (
        <H1
          text={`Hello, ${currentUser.name}!`}
          fontSize={25}
          color={'#3A865A'}
        />
      ) : null}

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
          {allCuisines?.map(cuisine => {
            return (
              <View key={cuisine}>
                <Pressable
                  onPress={() => {
                    navigation.navigate('Recipes');
                    setCuisineSelected(cuisine);
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
                          fontSize: 18,
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
      {favorites.length >= 1 && (
        <H1 text={' My Favorite Recipes'} fontSize={20} color={'#3A865A'} />
      )}

      {favorites.length >= 1 &&
        favorites.map((favorite, index) => {
          return (
            <View key={index}>
              <ScrollView horizontal={true}>
                <Pressable
                  onPress={() =>
                    navigation.navigate('Recipe Details', {
                      recipe: favorite,
                    })
                  }>
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
                          fontSize: 18,
                          color: 'white',
                          fontWeight: 'bold',
                        }}>
                        {favorite.dishName[0].toUpperCase() +
                          favorite.dishName.substring(1)}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              </ScrollView>
            </View>
          );
        })}
    </SafeAreaView>
  );
};
export default Home;
