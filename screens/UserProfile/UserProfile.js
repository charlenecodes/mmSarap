import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './UserProfile.styles';
import H2 from '../../components/Headers/H2';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// This should display all the recipes
const UserProfile = ({ route }) => {
  // const username = route.params.username;
  const numberOfRecipes = 2;
  const numberOfFavorites = 3;

  return (
    <View
      style={styles.container}
    >
      <View
        style={{ flexDirection: 'row', gap: 15, justifyContent: 'flex-start' }}
      >
        <FontAwesome
            name={"user-circle"}
            color={'gray'}
            size={80}
          />
        
    
        <View
          style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
        >
          <Text 
            style={{fontSize: 20, fontWeight: 'bold'}}
          >
            {/* change this so that we will get the number of recipes here */}
            {numberOfRecipes}
          </Text>
          <Text>recipes</Text>
        </View>
        <View
          style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
        >
          <Text 
            style={{fontSize: 20, fontWeight: 'bold'}}
          >
            {/* change this so that we will get the number of recipes here */}
            {numberOfFavorites}
          </Text>
          <Text>favorites</Text>
        </View>

      </View>
      <Text
        style={{ fontSize: 14, marginTop: 5, justifyContent: 'flex-start'}}
      >@username</Text>
    </View>

  )
}

export default UserProfile