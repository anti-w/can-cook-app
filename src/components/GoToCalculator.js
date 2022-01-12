import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'


const GoToCalculator = ({ navigation }) => {
  const itens = useSelector(state => state.foods)
  return (
    <View style={styles.infos}>
      <View style={styles.separator}>
        <Text style={{ color: '#F21D1D' }}>Carboidratos(g)</Text>
        <Text style={{ color: '#88A61C' }}>Calorias(kcal)</Text>
      </View>
      <View style={styles.separator}>
        <Text style={{ color: '#F28705' }}>Lipídios(g)</Text>
        <Text style={{ color: '#A926D5' }}>Proteínas(g)</Text>
      </View>
      <TouchableOpacity
        onPress={() => { navigation.navigate('Calculator') }}

        style={{
          width: 30,
          height: 30,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: -5,
          marginRight: 20,
          flexDirection: 'column-reverse',
        }}>
        <Image
          style={styles.image}
          source={{ uri: 'https://res.cloudinary.com/dscztnlqq/image/upload/v1641900033/can-eat/prato_o6fpae.png' }} />
        <View style={{
          justifyContent: 'center',
          flexDirection: 'row-reverse',
          backgroundColor: '#F21D1D',
          borderRadius: 1000,
          width: 20,
          height: 20
        }}><Text style={{ color: 'white' }}>{itens.length - 1}</Text></View>
      </TouchableOpacity>

    </View>
  )

}

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
  infos: {

    flexDirection: 'row',
    marginHorizontal: 30,
    marginVertical: 20,
  },
  separator: {
    flex: 1,
  },
  image: {
    width: width / 11,
    height: width / 11,
    resizeMode: 'center',
  }

})


export default GoToCalculator