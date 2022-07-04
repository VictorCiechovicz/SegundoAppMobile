import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Florestaamazonica from './assets/floresta-amazonica.png'
import Florestacongo from './assets/floresta-congo.png'
import Florestataiga from './assets/floresta-taiga.png'

export default function App() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.texto1}>Florestas pelo mundo</Text>

      <Image source={Florestacongo} style={estilos.img} />
      <Text style={estilos.texto2}>Florestas do Congo (África)</Text>

      <Image source={Florestataiga} style={estilos.img} />
      <Text style={estilos.texto2}>Florestas (Hemisfério Norte)</Text>

      <Image source={Florestaamazonica} style={estilos.img} />
      <Text style={estilos.texto2}>Florestas Amazônica (América do Sul)</Text>
    </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  texto1: {
    fontSize: 22
  },
  texto2: {
    fontSize: 16
  },

  img: {
    marginTop: 20,
    marginBottom: 10,
    width: 400,
    height: 150
  }
})
