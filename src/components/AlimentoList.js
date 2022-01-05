import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { View, Text, StyleSheet, Dimensions, Button, TouchableOpacity, FlatList, Image } from 'react-native'


const CardAlimento = ({ item, uri }) => {
  const [counter, setCounter] = useState(0)


  return (
    <View style={styles.container}>
      {/* Início do card (imagem + descrição do alimento) */}
      <View style={styles.card}>
        <Image
          source={{ uri: uri }}
          style={styles.image}
        />

        <Text style={styles.description}>
          <Text>{item.Nome}</Text>

        </Text>

      </View>
      {/* Fim do card e início do container do contador*/}
      <View style={[styles.card, styles.containerAdd]}>
        <TouchableOpacity
          onPress={() => {
            if (counter >= 0) setCounter(counter + 1)
          }}
          style={styles.button}>
          <Text
            style={styles.buttonCount}>+</Text>
        </TouchableOpacity>
        <Text
          style={
            {
              textAlign: 'center', fontWeight: 'bold',
              color: 'white'
            }}>
          {counter >= 10 ? counter / 10 + ' kg' : counter * 100 + ' gramas'}
        </Text>
        <TouchableOpacity
          onPress={() => {
            if (counter > 0)
              setCounter(counter - 1)
          }}
          style={styles.button}>
          <Text
            style={styles.buttonCount}>-</Text>
        </TouchableOpacity>

      </View>

    </View>
  )

}

const AlimentoList = ({ group, uri }) => {
  const [alimentos, setAlimentos] = useState(null)


  useEffect(() => {
    axios.get(`https://api-can-cook.herokuapp.com/${group}`).then((res) => setAlimentos(res.data)).catch(err => console.log(err))

  }, [group])

  const renderItem = ({ item }) => <CardAlimento item={item} uri={uri} />


  return (
    <FlatList
      data={alimentos}
      renderItem={renderItem}
      keyExtractor={item => item.Código} />
  )
}

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    flex: 4,
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  card: {
    width: width / 1.3,
    height: width / 5.2,
    backgroundColor: '#08A620',
    borderRadius: width / 25,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  containerAdd: {
    width: width / 6,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 0,
  },
  button: {
    width: width / 18,
    height: width / 18,
    borderRadius: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginVertical: 4
  },
  description: {
    color: 'white',
    fontSize: 20,
    width: width / 1.7,
    fontWeight: 'bold'

  },
  image: {
    width: width / 12,
    height: width / 12,
    resizeMode: 'center',
    marginRight: 30
  },
  buttonCount: {
    color: '#08A620',
    fontWeight: 'bold',
    fontSize: 20,
  }
})

const mapStateToProps = ({ filter }) => {
  return {
    group: filter.group,
    uri: filter.uri
  }
}

export default connect(mapStateToProps)(AlimentoList)