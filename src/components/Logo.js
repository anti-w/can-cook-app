import React, { useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import FoodCard from './FoodCard'


const Logo = () => {
  const itens = useSelector(state => state.foods)
  return (
    <View style={{ height: 300, backgroundColor: 'blue' }}>
      {
        itens.length > 1 ? (
          itens.map((item, i) =>
            <FoodCard
              uri={item.uri}
              key={i}
              carboidrato={item.carboidrato}
              counter={item.counter}
              nome={item.nome}
              disabled={true}
              proteina={item.proteina}
              calorias={item.calorias}
              lipidios={item.lipidios} />)) : (
          <Text>Nenhum alimento selecionado</Text>)
      }



    </View>
  )

}


export default Logo