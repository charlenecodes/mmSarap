import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './UserProfile.styles';

// This should display all the recipe 
const UserProfile = ({ route }) => {
  const username = route.params.username;
  
  return (
    <View
      style={styles.container}
    >
      <Text>UserProfile</Text>
      <Text>{username}</Text>
    </View>
  )
}

export default UserProfile