import React, { useState } from "react";
import { FlatList, View, StyleSheet, Text, TouchableOpacity, Image, Dimensions } from "react-native";

const DATA = [
  {
    id: "Grupo-01",
    title: "Grupo 01",
    uri: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png',
  },
  {
    id: "Grupo-02",
    title: "Grupo 02",
    uri: 'https://cdn-icons.flaticon.com/png/512/1065/premium/1065715.png?token=exp=1641140364~hmac=99281d8b48f19202e84be56ab81aa73d',
  },
  {
    id: "Grupo-03",
    title: "Third Item",
    uri: 'teste-03',
  },
  {
    id: "Grupo-04",
    title: "Forth Item",
    uri: 'teste-04',
  },
  {
    id: "Grupo-05",
    title: "Fifi Item",
    uri: 'teste-01',
  },
  {
    id: "Grupo-06",
    title: "Fifi6 Item",
    uri: 'teste-01',
  },
  {
    id: "Grupo-07",
    title: "Fifi7 Item",
    uri: 'teste-01',
  },
];

const Item = ({ item, onPress, backgroundColor, textColor, borderColor }) => (
  <TouchableOpacity onPress={onPress} style={[
    styles.item, backgroundColor, borderColor]}>
    <Image
      source={{ uri: item.uri }}
      style={[styles.image, backgroundColor, borderColor]}
    />

    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity >
);

const Filter = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = 'white'
    const color = item.id === selectedId ? 'black' : 'gray';
    const borderColor = item.id === selectedId ? '#C0D904' : 'white';


    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id)
          console.log(item.uri)
        }
        }
        backgroundColor={{ backgroundColor }
        }
        textColor={{ color }
        }
        borderColor={{ borderColor }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.item, styles.categorias]}>Categorias</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
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
    color: '#C0D904',
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: 'red',
    marginTop: 10
  },
  image: {
    width: width / 13,
    height: width / 13,
    borderWidth: 2,
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

export default Filter;