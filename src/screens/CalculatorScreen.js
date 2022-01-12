import React from 'react'
import { SafeAreaView, Text, StyleSheet, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import FoodCard from '../components/FoodCard'

const CalculatorScreen = () => {

  const itens = useSelector(state => state.foods)

  const renderItem = ({ item }) => <FoodCard
    nome={item.nome}
    carboidrato={item.carboidrato}
    proteina={item.proteina}
    calorias={item.calorias}
    lipidios={item.lipidios}
    uri={item.uri}
    key={item.id}
    counter={item.counter}
    disabled={true} />

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={itens}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
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