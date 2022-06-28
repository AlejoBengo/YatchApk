import { View, Text } from 'react-native'
import React from 'react';
import propTypes from 'prop-types';

export default function Saludar({name}) {
  return (
    <View>
      <Text>Hola {name}</Text>

    </View>
  )
}

Saludar.defaultProps={
    name:'usuario/a'
}

Saludar.propTypes={
    name:propTypes.string.isRequired,
}

