import React, { useState } from 'react'
import { TouchableOpacity, Text, View, StyleSheet, Image, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { addAlimento } from '../store/actions/calculator'
import Nutrients from './Nutrients'

const FoodCard = ({
  uri,
  nome,
  carboidrato,
  calorias,
  lipidios,
  proteina,
  counter,
  alimento,
  addAli }) => {

  const [state, setState] = useState([])
  return (
    <TouchableOpacity
      onPress={() => {
        setState(state.concat([...alimento]))
      }}

      style={[styles.container, styles.content]} >
      <Image source={{ uri: uri }} style={{ height: 64, width: 64 }} />
      <View style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.description}>{nome}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 3.5 }}>
          <Nutrients bgColor={'#F21D1D'} item={(carboidrato * counter).toFixed(1)} />
          <Nutrients bgColor={'#88A61C'} item={(calorias * counter).toFixed(1)} />
          <Nutrients bgColor={'#F28705'} item={(lipidios * counter).toFixed(1)} />
          <Nutrients bgColor={'#A926D5'} item={(proteina * counter).toFixed(1)} />
          {console.log(state)}

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
    fontSize: 16,
    width: width / 1.6,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 5
  },

})

const mapStateToProps = ({ filter }) => {
  return {
    uri: filter.uri,
    alimento: filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addAli: alimento => dispatch(addAlimento(alimento))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FoodCard)