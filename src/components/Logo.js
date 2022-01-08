import React, { useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import FoodCard from './FoodCard'


const Logo = ({ alimento, nome }) => {
  return (
    <View style={{ height: 300, backgroundColor: 'blue' }}>
      <Text>
        {nome}
      </Text>

    </View>
  )

}

const mapStateToProps = ({ calculator }) => {
  return {
    alimento: calculator,
    nome: calculator.nome
  }
}

export default connect(mapStateToProps)(Logo)