import { StyleSheet, Text, Pressable } from 'react-native';
import React from 'react';

export default function FilterButton({ text, onPress }) {
    return (
        <Pressable
            onPress={onPress}
            style={styles.button}
        > 
                <Text
                // try to customize it so that when the button is pressed it will have a different style
                    style={styles.text}
                >{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        paddingHorizontal: 3,
        borderWidth: 1.4,
        borderColor: '#3A865A'
    },
    buttonSelected: {
        backgroundColor: '#3A865A',
        borderRadius: 20,
        paddingHorizontal: 3
    },
    text: {
        color: '#3A865A',
        margin: 5,
        fontWeight: '600'
    },
    textPressed: {
        color: 'white',
        margin: 5,
        fontWeight: '600'
    }
})