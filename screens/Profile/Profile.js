import { Text, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { styles } from './Profile.styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Profile = () => {
  const [hasPhoto, setHasPhoto] = useState(false)
  const [photo, setPhoto] = useState('')

  return (
    <View
      style={styles.container}
    >
      <Text
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 'bold',
          fontSize: 30,
          paddingBottom: 10,
          color: '#3A865A'
        }}
      >Profile</Text>


      <Pressable
        onPress={() => console.log('change user photo')}
      >
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <FontAwesome
            name={"user-circle"}
            color={hasPhoto ? 'orange' : 'gray'}
            size={100}
          />
        </View>
      </Pressable>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            paddingTop: 10,
            paddingBottom: 30,
            fontSize: 20
          }}
        >Hello
          <Text
            style={{
              color: '#3A865A',
              fontWeight: 'bold',
              fontSize: 20
            }}
          > @charlene</Text>
        </Text>
      </View>




      <View
        style={{
          fontSize: 21,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Pressable
          onPress={() => console.log(`go to user's recipes`)}
        >
          <Text
            style={{
              color: '#3A865A',
              fontWeight: 'bold',
              fontSize: 20
            }}
          >My Recipes</Text>
        </Pressable>

        <Pressable
          onPress={() => console.log(`go to user's recipes`)}
        >
          <Text
            style={{
              color: '#3A865A',
              fontWeight: 'bold',
              fontSize: 20
            }}
          >Favorite Recipes</Text>
        </Pressable>

        <Text>Add</Text>
        <Text>Add</Text>
      </View>

    </View>
  )
}

export default Profile
