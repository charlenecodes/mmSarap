import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function H1({text, fontSize, color}) {
  return (
    <View>
      <Text style={[styles.h1, {fontSize: fontSize, color: color}]}>
        {text[0].toUpperCase() + text.substring(1)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  h1: {
    marginVertical: 3,
    fontWeight: 'bold',
  },
});
