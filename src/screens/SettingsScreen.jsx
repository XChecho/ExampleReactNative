import React from 'react'
import { View, Text, Button } from 'react-native'

export default function SettingsScreen({navigation}) {

  const { navigate } = navigation;

  const goToHome = () => {
      navigate("Home")
  }
  return (
    <View>
      <Text>SettingsScreen, funciona el enrutamiento.</Text>
      <Button onPress={goToHome} title='Hola, soy yo de nuevo'/>
    </View>
  )
}