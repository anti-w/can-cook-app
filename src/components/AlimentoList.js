import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { View, Text, StyleSheet, Dimensions, Button, TouchableOpacity, FlatList, Image } from 'react-native'


const CardAlimento = ({ item, uri }) => {
  const [counter, setCounter] = useState(0)


  return (
    <View style={styles.container}>
      {/* Início do card (imagem + descrição do alimento) */}
      <View style={[styles.content, styles.card]}>
        <Image
          source={{ uri: uri }}
          style={styles.image}
        />
        <View style={{ justifyContent: 'space-between' }}>
          <Text style={styles.description}>
            <Text>{item.Nome}</Text>

          </Text>
          <View style={{ backgroundColor: 'red', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: 'white' }}>{item.Cálciomg}</Text>
            <Text style={{ color: 'white' }}>{item.Cálciomg}</Text>
            <Text style={{ color: 'white' }}>{item.Cálciomg}</Text>
            <Text style={{ color: 'white' }}>{item.Carboidratototalg}</Text>
            <Text style={{ color: 'white' }}>{item.VitaminaB6mg == null ? item.VitaminaB6mg : '0'}</Text>

          </View>
        </View>

      </View>
      {/* Fim do card e início do container do contador*/}
      <View style={[styles.content, styles.containerAdd]}>
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
              color: 'white', marginVertical: 8
            }}>
          {counter >= 10 ? counter / 10 + ' kg' : counter * 100 + ' g'}
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
/* 

component responsável por renderizar os dados da API
através de uma flatlist
foi necessário o uso do redux para fazer a requisição
de acordo com o grupo selecionado pelo usuário no 
outro component (filter) e renderizar o component
CardAliemento de acordo com os alimentos da API.

*/

const AlimentoList = ({ group, uri }) => {
  const [alimentos, setAlimentos] = useState(null)

  /*
    ao utilizar o useEffect, tenho como definir
    em que momento gostaria de realizar um tipo de "efeito"
    e o react re-renderiza os seus componentes sempre que
    um estado é alterado, no caso um estado global proveniente do redux. O efeito só acontece de acordo com a depedência inserida no final do método => [group]
  
  */
  useEffect(() => {
    axios.get(`https://api-can-cook.herokuapp.com/${group}`).then((res) => setAlimentos(res.data)).catch(err => console.log(err))

  }, [group])

  //axios retorna uma promise que é resolvida com o .then assim tenho na resposta da requisição uma prop chamada data que contém os dados já em formato json


  //função para renderizar o CardAlimento de acordo com cada item vindo da propriedade do component Flatlist "renderItem" que recebe uma função e retorna um objeto com uma prop chamada item contendo os dados no json, assim podemos acessar os dados como acessamos qualquer valor num obj obj.key.value


  //como renderItem retorna mais de um e queremos apenas o item, utilizei a sintaxe de destructuring para não pegar nada das props além de item
  const renderItem = ({ item }) => <CardAlimento item={item} uri={uri} />

  //flatlist precisa obrigatoriamente das tres props, data, renderItem e keyextractor
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
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'green',
    height: width / 6,
  },

  card: {
    flexDirection: 'row',
    width: width / 1.3,
  },
  containerAdd: {
    width: width / 7,
  },
  button: {
    backgroundColor: 'white',
    width: width / 20,
    height: width / 20,
    alignItems: 'center',
    marginVertical: -5,
    borderRadius: 1000

  },
  description: {
    color: 'white',
    fontSize: 16,
    width: width / 1.6,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  image: {
    width: width / 12,
    height: width / 12,
    resizeMode: 'contain',
    marginRight: 10
  },
  buttonCount: {
    color: '#08A620',
    fontSize: 16,
  }
})

const mapStateToProps = ({ filter }) => {
  return {
    group: filter.group,
    uri: filter.uri
  }
}

export default connect(mapStateToProps)(AlimentoList)