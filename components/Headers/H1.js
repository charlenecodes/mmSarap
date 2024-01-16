import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function H1({text}) {
  return (
    <View>
      <Text
        style={styles.h1}
      >{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  h1: {
    marginVertical: 3,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#3A865A',
    textTransform: 'capitalize'
}
})