import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

const Nutrients = ({ item, bgColor }) => {
  return (

    <View style={[styles.nutri, { backgroundColor: bgColor }]}>
      <Text style={styles.text}>
        {item}
      </Text>
    </View>
  )


}

const { width } = Dimensions.get('screen')

const styles = StyleSheet.create({
  nutri: {
    borderRadius: 1000,
    height: width / 15.6,
    width: width / 15.6,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 11,
    color: '#F2F2F2'
  },
})

export default Nutrients