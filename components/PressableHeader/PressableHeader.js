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
                    {/* capitalize makes the text of the title capitalized when shown anywhere */}
                    <Text
                        numberOfLines={1}
                        ellipsizeMode='tail'
                        style={[styles.header, { fontSize: fontSize, textTransform: 'capitalize' }]}
                    >
                        {category} {header}
                    </Text>
                    <MaterialIcons name={'chevron-right'} size={fontSize} color={color} />
                </View>

            </Pressable>
        </View>
    )
}