import { SafeAreaView, Text } from 'react-native'
import React from 'react'
import { styles } from './MyRecipes.styles'

export default function MyRecipes() {
  return (
    <SafeAreaView
      style={styles.container}
    >
      <Text>MyRecipes</Text>
    </SafeAreaView>
  )
}