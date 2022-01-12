import React, { useState } from 'react'
import { TouchableOpacity, Text, View, StyleSheet, Image, Dimensions } from 'react-native'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { foodAdd } from '../store/reducers/foodSlice'
import Nutrients from './Nutrients'

const FoodCard = ({
  nome,
  carboidrato,
  calorias,
  lipidios,
  proteina,
  counter,
  alimento,
  uri,
  disabled
}) => {


  const dispatch = useDispatch()

  return (
    <TouchableOpacity
      onPress={() => {
        if (!disabled) (dispatch(foodAdd({
          id: nanoid(),
          nome: nome,
          carboidrato: carboidrato,
          uri: uri,
          counter: counter,
          calorias: calorias,
          lipidios: lipidios,
          proteina: proteina
        })))

      }
      }
      style={[styles.container, styles.content]} >
      <Image source={{ uri: uri }} style={styles.image} />
      <View style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.description}>{nome}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 3.5 }}>
          <Nutrients bgColor={'#F21D1D'} item={(carboidrato * counter).toFixed(1)} />
          <Nutrients bgColor={'#88A61C'} item={(calorias * counter).toFixed(1)} />
          <Nutrients bgColor={'#F28705'} item={(lipidios * counter).toFixed(1)} />
          <Nutrients bgColor={'#A926D5'} item={(proteina * counter).toFixed(1)} />
        </View>
      </View>

    </TouchableOpacity >
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
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#394D59',
    height: width / 6,
  },
  description: {
    color: 'white',
    fontSize: 14,
    width: width / 1.6,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 5
  },
  image: {
    width: width / 11,
    height: width / 11,
    resizeMode: 'center',
    marginLeft: 20
  }

})




export default FoodCard