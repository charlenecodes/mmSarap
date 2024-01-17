import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {styles} from './PressableHeader.styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function PressableHeader({
  category,
  onPress,
  header,
  fontSize,
  color,
}) {
  const transformedHeader = header[0].toUpperCase() + header.substring(1);
  return (
    <View>
      <Pressable onPress={onPress}>
        <View style={styles.headerAlignment}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[styles.header, {fontSize: fontSize, maxWidth: 200}]}>
            {category} {transformedHeader}
          </Text>
          <MaterialIcons name={'chevron-right'} size={fontSize} color={color} />
        </View>
      </Pressable>
    </View>
  );
}
