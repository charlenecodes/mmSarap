import { Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import { styles } from './Home.styles';

function Home() {

  return (
    <SafeAreaView
      style={styles.container}
    >
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 30,
          paddingBottom: 10,
          color: '#3A865A'
        }}
      >Home</Text>

      <Text
        style={{
          fontSize: 18,
          paddingBottom: 10,
          color: '#3A865A'
        }}
      >Favorites</Text>

      <Text
        style={{
          fontSize: 18,
          paddingBottom: 10,
          color: '#3A865A'
        }}
      >Newly Added</Text>
      <Text
        style={{
          fontSize: 18,
          paddingBottom: 10,
          color: '#3A865A'
        }}
      >Explore by Cuisine</Text>
    </SafeAreaView>
  )
}

export default Home