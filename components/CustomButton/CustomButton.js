import { StyleSheet, Text, Pressable } from 'react-native';
import React from 'react';

export default function CustomButton({ text, onPress }) {
    return (
        <Pressable
            onPress={onPress}
            style={styles.button}
        > 
                <Text
                    style={styles.text}
                >{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        // centered the button
        alignSelf: 'center',
        backgroundColor: '#3A865A',
        borderRadius: 20,
        width: '30%'
    },
    text: {
        fontSize: 20,
        color: 'white',
        margin: 5,

    }
})