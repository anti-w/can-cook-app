import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FlatList, View, Text } from 'react-native'

import CardAlimento from './CardAlimento'
import FoodCard from './FoodCard'
import { useSelector } from 'react-redux'
import LoadingData from './LoadingData'

/* 
component responsável por renderizar os dados da API
através de uma flatlist
foi necessário o uso do redux para fazer a requisição
de acordo com o grupo selecionado pelo usuário no 
outro component (filter) e renderizar o component
CardAliemento de acordo com os alimentos da API.

*/

const AlimentoList = ({ loading, setLoading }) => {
  const group = useSelector(state => state.groups)
  const [alimentos, setAlimentos] = useState(null)


  /*
    ao utilizar o useEffect, tenho como definir
    em que momento gostaria de realizar um tipo de "efeito"
    e o react re-renderiza os seus componentes sempre que
    um estado é alterado, no caso um estado global proveniente do redux. O efeito só acontece de acordo com a depedência inserida no final do método => [group]
  
  */
  useEffect(() => {
    let mounted = true

    axios.get(`https://api-can-cook.herokuapp.com/${group.grupo}`).then((res) => {
      if (mounted) {
        setLoading(false)
        setAlimentos(res.data)

      }
    }).catch(err => console.log(err))

    return function cleanup() {
      mounted = false
    }

  }, [group])

  //axios retorna uma promise que é resolvida com o .then assim tenho na resposta da requisição uma prop chamada data que contém os dados já em formato json


  //função para renderizar o CardAlimento de acordo com cada item vindo da propriedade do component Flatlist "renderItem" que recebe uma função e retorna um objeto com uma prop chamada item contendo os dados no json, assim podemos acessar os dados como acessamos qualquer valor num obj obj.key.value


  //como renderItem retorna mais de um e queremos apenas o item, utilizei a sintaxe de destructuring para não pegar nada das props além de item
  const renderItem = ({ item }) => <CardAlimento item={item} />

  //flatlist precisa obrigatoriamente das tres props, data, renderItem e keyextractor
  return (
    loading ? (<LoadingData />) : (
      <FlatList
        data={alimentos}
        renderItem={renderItem}
        keyExtractor={item => item.Código} />

    )
  )
}


export default AlimentoList