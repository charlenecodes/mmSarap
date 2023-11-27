import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './Home.styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Home = () => {
  const insets = useSafeAreaInsets()

  return (
    <View
      style={{
        flex: 1,
        // justifyContent: 'space-between',
        alignItems: 'center',

        // Paddings to handle safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <Text>Home</Text>
    </View>
  )
}

export default Home