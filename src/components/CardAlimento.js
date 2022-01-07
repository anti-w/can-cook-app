import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { addAlimento } from '../store/actions/calculator'

const CardAlimento = ({ item, uri, addAli }) => {
  const [counter, setCounter] = useState(0)


  return (
    <View style={styles.container}>
      {/* Início do card (imagem + descrição do alimento) */}
      <TouchableOpacity
        onPress={() => {
          addAli({
            alimento: item.Nome,
            carboidrato: item.Carboidratototalg * counter,
            proteina: item.Proteínag * counter,
            calorias: item.Energiakcal * counter,
            lipidios: item.Lipídiosg * counter,
            itens: +1

          })
        }}
        style={[styles.content, styles.card]}>
        <Image
          source={{ uri: uri }}
          style={styles.image}
        />
        <View style={{ justifyContent: 'space-between' }}>
          <Text style={styles.description}>
            {item.Nome}
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 3.5 }}>
            <View style={[styles.nutri, { backgroundColor: '#F21D1D' }]}>
              <Text
                style={styles.text}
              >
                {(item.Carboidratototalg * counter).toFixed(1)}
              </Text>
            </View>

            <View style={[styles.nutri, { backgroundColor: '#88A61C' }]}>
              <Text style={styles.text}>
                {(item.Proteínag * counter).toFixed(1)}

              </Text>
            </View>

            <View style={[styles.nutri, { backgroundColor: '#F28705' }]}>
              <Text style={styles.text}>
                {(item.Energiakcal * counter).toFixed(1)}
              </Text>
            </View>
            <View style={[styles.nutri, { backgroundColor: 'red' }]}>
              <Text style={styles.text}>
                {(item.Lipídiosg * counter).toFixed(1)}
              </Text>
            </View>

          </View>

        </View>

      </TouchableOpacity>
      {/* Fim do card e início do container do contador*/}
      <View style={[styles.content, styles.containerAdd]}>
        <TouchableOpacity
          onPress={() => {
            if (counter >= 0) setCounter(counter + 1)
          }}
          onLongPress={() => { if (counter >= 0) setCounter(counter + 5) }}
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
          onLongPress={() => { if (counter >= 0) setCounter(counter - 5) }}
          style={styles.button}>
          <Text
            style={styles.buttonCount}>-</Text>
        </TouchableOpacity>

      </View>
    </View>
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
  nutri: {
    borderRadius: 1000,
    height: width / 15.6,
    width: width / 15.6,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
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
    fontWeight: 'bold',
    marginBottom: 5
  },
  text: {
    fontWeight: 'bold',
    fontSize: 11,
    color: '#F2F2F2'
  },
  image: {
    width: width / 12,
    height: width / 12,
    resizeMode: 'contain',
    marginRight: 5
  },
  buttonCount: {
    color: '#394D59',
    fontSize: 16,
  }
})

const mapStateToProps = ({ filter }) => {
  return {
    uri: filter.uri
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addAli: alimento => dispatch(addAlimento(alimento))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardAlimento)