import { Text, View, Image, Pressable, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { styles } from './Profile.styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PressableHeader
 from '../../../components/PressableHeader/PressableHeader';
const Profile = ({ navigation }) => {
  const [hasPhoto, setHasPhoto] = useState(false)
  const [photo, setPhoto] = useState('')

  return (
    <SafeAreaView
      style={styles.container}
    >
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
      <PressableHeader
        fontSize={21}
        header={'My Recipes'}
        color={'#3A865A'}
        onPress={() => navigation.navigate('My Recipes')}
      />
      <PressableHeader
        fontSize={21}
        header={'Favorites'}
        color={'#3A865A'}
        onPress={() => navigation.navigate('Favorites')}
      />

    </SafeAreaView>
  )
}

export default Profile