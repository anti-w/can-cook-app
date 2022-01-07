import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { FlatList } from 'react-native'

import CardAlimento from './CardAlimento'

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


const mapStateToProps = ({ filter }) => {
  return {
    group: filter.group,
    uri: filter.uri
  }
}

export default connect(mapStateToProps)(AlimentoList)