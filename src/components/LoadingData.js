import React from 'react'
import { Image, View, StyleSheet, Dimensions, Text } from 'react-native'

const LoadingData = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Ei! Selecione uma categoria acima para buscarmos as informações.
      </Text>
      <Image
        style={styles.image}
        source={{ uri: 'https://res.cloudinary.com/dscztnlqq/image/upload/v1641990583/can-eat/pedir-comida_b2jley.png' }} />
    </View>
  )
}

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  text: {
    marginHorizontal: 60,
    marginTop: -100,
    marginBottom: 50,
    fontSize: 30,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  image: {
    width: width / 3,
    height: width / 3

  }
})

export default LoadingData