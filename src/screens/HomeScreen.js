import Filter from '../components/Filter'
import React, { useState } from 'react'
import { View, SafeAreaView, Text } from 'react-native'
import AlimentoList from '../components/AlimentoList'
import GoToCalculator from '../components/GoToCalculator'
import FoodCard from '../components/FoodCard'


const HomeScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true)
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <Filter />
      {!loading && <GoToCalculator navigation={navigation} />}

      <AlimentoList loading={loading} setLoading={setLoading} />



    </SafeAreaView>
  )
}

export default HomeScreen