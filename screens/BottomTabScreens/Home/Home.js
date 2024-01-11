import { Text, View, SafeAreaView, Pressable, useColorScheme, ScrollView, Image } from 'react-native';
import React, { useEffect } from 'react';
import { styles } from './Home.styles';
import PressableHeader from '../../../components/PressableHeader/PressableHeader';
import RecipeCard from '../../../components/RecipeCard/RecipeCard';
import axios from 'axios';


const Home = ({ navigation }) => {
  const colorScheme = useColorScheme()

  // if (colorScheme === 'dark') console.log('dark mode')

  const isDark = colorScheme === 'dark'

  const localhost = Platform.OS === 'android' ? '10.0.2.2' : 'localhost'

  // useEffect(() => {
  //   async function getRecipes() {
  //     try {
  //       // it wasn't working because it was https and I had a typo before 3000
  //       await axios.get(`http://${localhost}:3000/recipes/`)
  //       // await axios.get(`http://172.20.10.12:3000/recipes/`)
  //         .then((res) => setRecipes(res.data))
  //     } catch (err) {
  //       console.error({ error: err.message })
  //     }
  //   }
  //   getRecipes()
  // }, [])

  return (
    <SafeAreaView
      style={styles.container}
    >
      {/* <Text
        style={{
          fontWeight: 'bold',
          fontSize: 30,
          paddingBottom: 10,
          color: (isDark ? '#3A865A' : 'orange')
        }}
      >Home</Text> */}

      {/* <Text>useColorScheme(): {colorScheme}</Text> */}

      <View>

        <PressableHeader 
          onPress={() => navigation.navigate('Favorites')}
          header={'Favorites'}
          fontSize={20}
          color={'#3A865A'}
        />
        <ScrollView
          horizontal={true}
        >
          <Image 
            style={{ height: 150, width: 150, margin: 5}}
            source={require('../../../images/lumpia.jpg')}
          />
          <Image 
            style={{ height: 150, width: 150, margin: 5}}
            source={require('../../../images/lumpia.jpg')}
          />
          <Image 
            style={{ height: 150, width: 150, margin: 5}}
            source={require('../../../images/lumpia.jpg')}
          />

          <Image 
            style={{ height: 150, width: 150, margin: 5}}
            source={require('../../../images/lumpia.jpg')}
          />

          <Image 
            style={{ height: 150, width: 150, margin: 5}}
            source={require('../../../images/lumpia.jpg')}
          />

        </ScrollView>
      </View>

      {/* <RecipeCard
        header={'dish'}
      /> */}

      <View>

        <PressableHeader 
          onPress={() => console.log('go to newly added recipe')}
          header={'Recents'}
          fontSize={20}
          color={'#3A865A'}
        />
        <ScrollView
          horizontal={true}
        >
          <Image 
            style={{ height: 150, width: 150, margin: 5}}
            source={require('../../../images/lumpia.jpg')}
          />
          <Image 
            style={{ height: 150, width: 150, margin: 5}}
            source={require('../../../images/lumpia.jpg')}
          />
          <Image 
            style={{ height: 150, width: 150, margin: 5}}
            source={require('../../../images/lumpia.jpg')}
          />

          <Image 
            style={{ height: 150, width: 150, margin: 5}}
            source={require('../../../images/lumpia.jpg')}
          />

          <Image 
            style={{ height: 150, width: 150, margin: 5}}
            source={require('../../../images/lumpia.jpg')}
          />

        </ScrollView>

      </View>

      <View
        style={{ marginBottom: 20 }}
      >
        <PressableHeader 
          onPress={() => navigation.navigate('BottomTab', {
            screen: 'Recipes'
          })}
          header={'Explore by Cuisine'}
          fontSize={20}
          color={'#3A865A'}
        />
        <ScrollView
          horizontal={true}
        >
          <Image 
            style={{ height: 150, width: 150, margin: 5}}
            source={require('../../../images/lumpia.jpg')}
          />
          <Image 
            style={{ height: 150, width: 150, margin: 5}}
            source={require('../../../images/lumpia.jpg')}
          />
          <Image 
            style={{ height: 150, width: 150, margin: 5}}
            source={require('../../../images/lumpia.jpg')}
          />

          <Image 
            style={{ height: 150, width: 150, margin: 5}}
            source={require('../../../images/lumpia.jpg')}
          />

          <Image 
            style={{ height: 150, width: 150, margin: 5}}
            source={require('../../../images/lumpia.jpg')}
          />

        </ScrollView>
      </View>

</SafeAreaView>
  )
}
export default Home