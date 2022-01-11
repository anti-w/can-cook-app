import Filter from '../components/Filter'
import React from 'react'
import { View, SafeAreaView } from 'react-native'
import AlimentoList from '../components/AlimentoList'
import GoToCalculator from '../components/GoToCalculator'
import FoodCard from '../components/FoodCard'


const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>



      <Filter />
      <GoToCalculator />

      <AlimentoList />



    </SafeAreaView>
  )
}

export default HomeScreen