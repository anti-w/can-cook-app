import React, { useState } from 'react'
import { Text, TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native'

const BalanceCounter = ({ counter, setCounter }) => {
  return (
    <View style={[styles.content, styles.containerAdd]}>
      <TouchableOpacity
        onPress={() => {
          if (counter >= 0) setCounter(counter + 1)
        }}
        onLongPress={() => { if (counter >= 0) setCounter(counter + 5) }}
        style={styles.button}>
        <Text
          style={styles.buttonCount}>+</Text>
      </TouchableOpacity>
      <Text

        style={
          {
            textAlign: 'center', fontWeight: 'bold',
            color: 'white', marginVertical: 8
          }}>
        {counter >= 10 ? counter / 10 + ' kg' : counter * 100 + ' g'}
      </Text>
      <TouchableOpacity
        onPress={() => {
          if (counter > 0)
            setCounter(counter - 1)
        }}
        onLongPress={() => { if (counter >= 0) setCounter(counter - 5) }}
        style={styles.button}>
        <Text
          style={styles.buttonCount}>-</Text>
      </TouchableOpacity>

    </View>

  )
}
const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#394D59',
    height: width / 6,

  },

  containerAdd: {
    width: width / 7,
  },
  button: {
    backgroundColor: 'white',
    width: width / 20,
    height: width / 20,
    alignItems: 'center',
    marginVertical: -5,
    borderRadius: 1000

  },

  buttonCount: {
    color: '#394D59',
    fontSize: 16,
  }
})

export default BalanceCounter

