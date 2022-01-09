import React, { useEffect, useState } from "react";
import axios from 'axios'
import { FlatList, View, StyleSheet, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { groupAdd } from '../store/reducers/groupSlice'

/* 
  Componente parecido com o AlimentosList, também contém uma flatlist porém ele é renderizado na horizontal e possui um evento de click que altera o estado global fornecido pelo redux
*/


const Item = ({ item, onPress, backgroundColor, textColor, id }) => (
  <TouchableOpacity onPress={onPress} style={[
    styles.item, backgroundColor]}>
    <Image
      source={{ uri: item.uri }}
      style={[styles.image, backgroundColor]}
    />

    <Text style={[styles.title, textColor]}>{item.nome}</Text>
  </TouchableOpacity >
);

const Filter = () => {
  const [groups, setGroups] = useState(null)
  const [selectedId, setSelectedId] = useState(null);
  const dispatch = useDispatch()

  const renderItem = ({ item }) => {
    const backgroundColor = 'white'
    const color = item.nome === selectedId || item.search === selectedId ? 'black' : 'gray';
    return (
      <Item
        item={item}
        onPress={() => {
          item.search ? (
            dispatch(groupAdd({
              grupo: item.search,
              uri: item.uri
            }))) : (
            dispatch(groupAdd({
              grupo: item.nome,
              uri: item.uri
            }))
          )

        }}
        backgroundColor={{ backgroundColor }
        }
        textColor={{ color }
        }

      />
    );
  };
  useEffect(() => {
    axios.get('https://api-can-cook.herokuapp.com/groups')
      .then(res => setGroups(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <View
      style={styles.container}>
      <Text style={[styles.item, styles.categorias]}>Categorias</Text>
      <FlatList
        data={groups}
        renderItem={renderItem}
        keyExtractor={(item) => item.nome}
        horizontal
      />

    </View>
  );
};
const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height / 7,
    marginTop: 40

  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  categorias: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10
  },
  image: {
    width: width / 13,
    height: width / 13,
    borderRadius: 1000,
    resizeMode: 'center',
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 5,

  },
});

/*
  O método connect fornecido pelo react-redux cria um "vínculo" entre as actions e os reducers de acordo com os parametros que lhe são fornecidos, no caso 2: mapDispatchToProps que faz com que o component connectado tenha acesso as actions dentro de seu escopo sem a necessidade de receber via props pelo seu component pai. E também o mapStateToProps que mapeia o estado global para o component para que ele possa ter acesso a ele. 

*/


export default Filter;