import React from 'react'
import { View, Text, Button, SafeAreaView } from 'react-native'

export default function HomeScreen(props) {
  const {navigation}= props;


const goToPage = ()=> {
  navigation.navigate('Settings')
}

  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Button onPress={goToPage} title='Ir A Ajustes' />
    </SafeAreaView>
  )
}