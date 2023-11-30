import { SafeAreaView, Text } from 'react-native';
import React from 'react';
import { styles } from './Favorites.styles';

export default function Favorites() {
  return (
    <SafeAreaView
      style={styles.container}
    >
      <Text>Favorites</Text>
    </SafeAreaView>
  )
}