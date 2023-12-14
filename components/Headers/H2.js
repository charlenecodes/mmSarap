import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function H2({ text }) {
  return (
    <View>
      <Text
        style={styles.text}
      >{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        marginVertical: 3,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3A865A',
    }
})