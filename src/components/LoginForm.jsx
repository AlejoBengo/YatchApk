import { View, Text,TextInput,Button } from 'react-native'
import React from 'react'

export default function LoginForm() {
  return (
    <View>
      <Text>LoginForm</Text>
      <TextInput placeholder="Email" ></TextInput>
      <TextInput placeholder="Contraseña" ></TextInput>
    <Button  title="enviar" onPress={()=>console.log("Enviado again")}  >Enviar</Button>
    </View>
  )
}