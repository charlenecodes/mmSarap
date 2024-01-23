import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function CapitalizeText({text, fontSize, color}) {
  return (
    <View>
      <Text style={[styles.text, {fontSize: fontSize, color: color}]}>
        {text[0].toUpperCase() + text.substring(1)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginVertical: 3,
  },
});
