import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import PressableHeader from '../PressableHeader/PressableHeader';
import { styles } from './RecipeCard.styles';

// This is what we 
export default function RecipeCard({ onPressRecipe, onPressUser, dishName, addedBy, category, instructions }) {
    return (
        <View
            style={styles.container}
        >

            <Image
                source={require('../../images/lumpia.jpg')}
                style={styles.cover}
            />
            <View
                style={styles.text}
            >
                <PressableHeader
                    header={dishName}
                    fontSize={20}
                    color={'#3A865A'}
                    addedBy={addedBy}
                    category={category}
                    onPress={onPressRecipe}
                />
                <Pressable
                    onPress={() => console.log('go to user profile, from Recipe Card')}
                >
                    <Text style={styles.text}>by <Text style={styles.username}>{addedBy}</Text></Text>
                    {/* <Text style={styles.text}>{instructions}</Text> */}
                </Pressable>

            </View>


        </View>


    )
}