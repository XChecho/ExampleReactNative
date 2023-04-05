import { Text, View, Button, SafeAreaView } from 'react-native'
import React, { Component } from 'react'

export default function HomeScreen({navigation}) {

  const { navigate } = navigation;

  const goToSettings = () => {
      navigate("SettingsScreen")
  }
  return (
    <SafeAreaView>
      <Text>Estamos en el home, example de enrutamiento.</Text>
      <Text>Estamos en el home, example de enrutamiento.</Text>
      <Text>Estamos en el home, example de enrutamiento.</Text>
      <Button  onPress={goToSettings} title='Ir a Settings'/>
    </SafeAreaView>
  )
}