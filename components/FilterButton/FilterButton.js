import {StyleSheet, Text, Pressable, View} from 'react-native';
import React, {useContext} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AuthContext} from '../../Context/authContext';
import useRecipes from '../../hooks/useRecipes';
import useCuisines from '../../hooks/useCuisines';

export default function FilterButton() {
  const {cuisineSelected, setCuisineSelected} = useContext(AuthContext);
  const {allCuisines} = useCuisines();
  const {allRecipes, setAllRecipes} = useRecipes();

  return (
    <View style={styles.container}>
      {cuisineSelected && (
        <Pressable
          style={styles.buttonSelected}
          onPress={() => {
            setCuisineSelected(null);
            setAllRecipes(allRecipes);
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 3,
            }}>
            <Text style={styles.textSelected}>{cuisineSelected}</Text>
            <AntDesign name={'close'} color={'white'} />
          </View>
        </Pressable>
      )}
      {!cuisineSelected &&
        allCuisines.map((cuisine, index) => {
          return (
            <Pressable
              key={index}
              onPress={() => {
                setCuisineSelected(cuisine);
              }}
              style={styles.button}>
              <Text style={styles.text}>{cuisine}</Text>
            </Pressable>
          );
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    borderRadius: 20,
    borderWidth: 1.4,
    borderColor: '#3A865A',
    paddingHorizontal: 3,
    marginHorizontal: 3,
  },
  buttonSelected: {
    backgroundColor: '#3A865A',
    borderRadius: 20,
    borderWidth: 1.4,
    borderColor: '#3A865A',
    paddingHorizontal: 3,
    marginHorizontal: 3,
  },
  text: {
    color: '#3A865A',
    margin: 5,
    fontWeight: '600',
    textAlign: 'center',
  },
  textSelected: {
    color: 'white',
    margin: 5,
    fontWeight: '600',
    textAlign: 'center',
  },
  resetText: {
    color: 'white',
    margin: 5,
    fontWeight: '600',
    textAlign: 'center',
  },
  resetButton: {
    backgroundColor: 'tomato',
    borderRadius: 20,
    borderWidth: 1.4,
    borderColor: 'tomato',
    paddingHorizontal: 3,
    marginHorizontal: 3,
  },
});
