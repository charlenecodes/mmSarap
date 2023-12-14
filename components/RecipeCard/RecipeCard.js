import { View, Text, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import PressableHeader from '../PressableHeader/PressableHeader';
import { styles } from './RecipeCard.styles';
import Octicons from 'react-native-vector-icons/Octicons';

// This is what we 
export default function RecipeCard({ onPressRecipe, onPressUsername, recipe, category }) {
    // how to use this so all the favorite recipes can be shown in one place?
    const [isFavorite, setIsFavorite] = useState(false)

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite)
        // have extra code that if favorite is true it will be added to an array
    }
    
    return (
        <View
            style={styles.container}
        >
            <Pressable
                onPress={onPressRecipe}
            >
            <Image
                source={require('../../images/lumpia.jpg')}
                style={styles.cover}
            />
            </Pressable>
           
            <View
                style={styles.cardDetails}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                <PressableHeader
                    header={recipe.dishName}
                    fontSize={20}
                    color={'#3A865A'}
                    addedBy={recipe.addedBy}
                    category={category}
                    onPress={onPressRecipe}
                    instructions={recipe.instructions}
                />
                <Pressable
                    onPress={toggleFavorite}
                >
                    <Octicons name={isFavorite ? 'heart-fill' : 'heart'} size={25} color={isFavorite ? 'red' : 'gray'} />
                </Pressable>
                </View>
                

                <Pressable
                    onPress={onPressUsername}
                >
                    <Text style={[styles.text, { color: 'gray'}]}>by <Text style={styles.username}>{recipe.addedBy}</Text></Text>
                </Pressable>
                {/* this will need to be passed to the recipe details */}
                

            </View>

        </View>


    )
}