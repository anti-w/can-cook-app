import Filter from '../components/Filter'
import React from 'react'
import { View, SafeAreaView } from 'react-native'
import CardAlimento from '../components/CardAlimento'
import Logo from '../components/Logo'

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <Filter />
      <Logo />

      <CardAlimento />



    </SafeAreaView>
  )
}

export default HomeScreen