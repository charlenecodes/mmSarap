import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

export default function InputField({ label,  onChange, onSubmitEditing, textAlignVertical, multiline, onKeyPress }) {

    // when multiline={true} then it will be a bigger area
    // textAlignVertical: 'top'
  return (
    <View
        style={styles.container}
    >
      <Text
        style={styles.label}
      >{label}</Text>

      <TextInput 
        style={styles.input}
        onChange={onChange}
        onSubmitEditing={onSubmitEditing}
        multiline={multiline}
        textAlignVertical={textAlignVertical}
        onKeyPress={onKeyPress}
      />
    
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#3A865A',
        fontWeight: 'bold',
        marginVertical: 3,
        
    },
    input: {
        color: 'black',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        width: '100%',
        padding: 5,
        marginBottom: 15,
        fontSize: 20
    }
})