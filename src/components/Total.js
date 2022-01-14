import React from 'react'
import { View, StyleSheet, Dimensions, Text } from 'react-native'
import { useSelector } from 'react-redux'
import Nutrients from './Nutrients'

const Total = () => {

  const total = useSelector(state => state.total)

  return (
    <View style={styles.container} >
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Total</Text>
      <Nutrients
        bgColor={'#F21D1D'}
        item={total.carbTotal.toFixed(1)} />
      <Nutrients
        bgColor={'#88A61C'}
        item={total.calTotal.toFixed(1)} />
      <Nutrients
        bgColor={'#F28705'}
        item={total.lipTotal.toFixed(1)} />
      <Nutrients
        bgColor={'#A926D5'}
        item={total.proTotal.toFixed(1)} />
    </View >
  )
}

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    width: width / 1.8,
    height: width / 7,
    backgroundColor: '#F2A30F',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    borderRadius: 40,
    marginTop: 40,
    marginRight: 50

  }
})

export default Total