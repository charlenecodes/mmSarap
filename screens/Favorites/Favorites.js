import { SafeAreaView, Text, View } from 'react-native';
import React from 'react';
import { styles } from './Favorites.styles';
import Octicons from 'react-native-vector-icons/Octicons';

export default function Favorites() {
  const hasFavorites = false;

  return (
    <SafeAreaView
      style={styles.container}
    >
      {
        hasFavorites ? (<Text>Your Favorites</Text>) : (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Octicons name={'heart-fill'} size={25} color={'red'} />
            <Text>recipes to see them here</Text>
          </View>
        )
      }

    </SafeAreaView>
  )
}