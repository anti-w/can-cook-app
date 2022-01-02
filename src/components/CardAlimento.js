import React from 'react'
import { View, Text, StyleSheet, Dimensions, Button, TouchableOpacity, FlatList } from 'react-native'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14dsa5571e29d72',
    title: '4 item',
  },
  {
    id: '58694a0f-3da1-471f-bddsa96-145571e29d72',
    title: '5 item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1dsa45571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bdsad96-145571e29d72',
    title: 'Third Item',
  },
];

const CardAlimento = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>
          {item.title}
        </Text>

      </View>
      <View style={[styles.card, styles.containerAdd]}>
        <TouchableOpacity style={styles.button}>
          <Text style={{
            color: '#ADBF24',
            fontWeight: 'bold',
            fontSize: 30,
          }}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{
            color: '#ADBF24',
            fontWeight: 'bold',
            fontSize: 30,
          }}>-</Text>
        </TouchableOpacity>

      </View>

    </View>
  )

}

const listAlimento = () => {
  const renderItem = ({ item }) => {
    return (<CardAlimento item={item} />)

  }
  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id} />
  )
}

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15
  },
  card: {
    width: width / 1.5,
    height: width / 4.25,
    backgroundColor: '#ADBF24',
    borderRadius: width / 25,
    marginHorizontal: 15
  },
  containerAdd: {
    width: width / 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: width / 12,
    height: width / 12,
    borderRadius: 1000,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    marginVertical: 5

  }
})

export default listAlimento