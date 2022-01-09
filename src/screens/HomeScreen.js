import Filter from '../components/Filter'
import React from 'react'
import { View, SafeAreaView } from 'react-native'
import AlimentoList from '../components/AlimentoList'
import Logo from '../components/Logo'
import FoodCard from '../components/FoodCard'


const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>



      <Filter />
      <Logo />

      <AlimentoList />



    </SafeAreaView>
  )
}

export default HomeScreen