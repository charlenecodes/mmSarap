import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { styles } from './PressableHeader.styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function PressableHeader({ category, onPress, header, fontSize, color }) {
    return (
        <View>
            <Pressable
                onPress={onPress}
            >
                <View
                    style={styles.headerAlignment}
                >
                    <Text
                        style={[styles.header, { fontSize: fontSize }]}
                    >
                        {category} {header}
                    </Text>
                    <MaterialIcons name={'chevron-right'} size={fontSize} color={color} />
                </View>

            </Pressable>
        </View>
    )
}