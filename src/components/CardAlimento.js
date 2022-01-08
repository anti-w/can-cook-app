import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import BalanceCounter from './BalanceCounter'
import FoodCard from './FoodCard'
import Nutrients from './Nutrients'

const CardAlimento = ({ item, uri }) => {
  const [counter, setCounter] = useState(0)


  return (
    <View style={styles.container}>
      <FoodCard
        nome={item.Nome}
        carboidrato={item.Carboidratototalg}
        proteina={item.Proteínag}
        calorias={item.Energiakcal}
        lipidios={item.Lipídiosg}
        counter={counter}
        uri={uri} />
      <BalanceCounter counter={counter} setCounter={setCounter} />

    </View >
  )
}

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
})

const mapStateToProps = ({ filter }) => {
  return {
    uri: filter.uri
  }
}


export default connect(mapStateToProps)(CardAlimento)