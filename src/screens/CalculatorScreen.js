import React from 'react'
import { SafeAreaView, Text, StyleSheet, FlatList, View } from 'react-native'
import { useSelector } from 'react-redux'
import FoodCard from '../components/FoodCard'
import Nutrients from '../components/Nutrients'
import Total from '../components/Total'

const CalculatorScreen = () => {

  const itens = useSelector(state => state.foods)

  const renderItem = ({ item }) => {

    return (<FoodCard
      nome={item.nome}
      carboidrato={item.carboidrato}
      proteina={item.proteina}
      calorias={item.calorias}
      lipidios={item.lipidios}
      uri={item.uri}
      key={item.id}
      counter={item.counter}
      disabled={true} />)
  }

  return (
    < SafeAreaView style={styles.container} >
      <FlatList
        data={itens}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />


      <Total />





    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  }
})

export default CalculatorScreen