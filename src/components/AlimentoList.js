import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Button, TouchableOpacity, FlatList, Image } from 'react-native'

const DATA = [
  {
    "Tiamina mg": 0.03,
    "Lipídios g": 6.1,
    "Umidade g": 74.5,
    "Vitamina B6 mg": 0.03,
    "Sal de adição g": 0,
    "Marca": "",
    "Zinco mg": 2.83,
    "Fibra alimentar g": 0.91,
    "Grupo": "Alimentos para fins especiais",
    "Vitamina A (RE) mcg": 47,
    "Energia kJ": 537,
    "Alfa-tocoferol (Vitamina E) mg": 0.22,
    "Ácidos graxos trans g": 0.11,
    "Riboflavina mg": 0.03,
    "Potássio mg": 180,
    "Cobre mg": 0.04,
    "Carboidrato total g": 7.94,
    "Ácidos graxos polinsaturados g": 0.47,
    "Carboidrato disponível g": 7.03,
    "Vitamina A (RAE) mcg": 23.5,
    "Nome": "Papa de carne bovina moída (acém), fubá e couve, c/ caldo de frango, c/ cebola e azeite de oliva, s/ sal",
    "Açúcar de adição g": 0,
    "Vitamina D mcg": 0.97,
    "Ferro mg": 1.35,
    "Nome Científico": "",
    "Proteína g": 10.8,
    "Equivalente de folato mcg": 22.4,
    "Ácidos graxos saturados g": 2.28,
    "Colesterol mg": 37.4,
    "Vitamina B12 mcg": 0.94,
    "Selênio mcg": 0.37,
    "Sódio mg": 149,
    "Vitamina C mg": 3.67,
    "Nome (Inglês)": "Baby food - ground meat beef (neck/chuck eye), cornmeal and collard green, with chicken broth, with onion and olive oil, unsalted",
    "Cinzas g": 0.63,
    "Magnésio mg": 10.7,
    "Código": "A0105N",
    "Fósforo mg": 67.2,
    "Energia kcal": 128,
    "Ácidos graxos monoinsaturados g": 2.84,
    "Álcool g": 0,
    "Niacina mg": 0.71,
    "Cálcio mg": 26.7
  },
  {
    "Umidade g": 12.9,
    "Riboflavina mg": null,
    "Vitamina A (RE) mcg": 0,
    "Carboidrato disponível g": 77.4,
    "Colesterol mg": 0,
    "Nome (Inglês)": "Rice, white, raw (average of several cultivars)",
    "Tiamina mg": 0.16,
    "Açúcar de adição g": 0,
    "Alfa-tocoferol (Vitamina E) mg": 0.08,
    "Grupo": "Cereais e derivados",
    "Lipídios g": 0.5,
    "Selênio mcg": 1.9,
    "Cobre mg": 0.13,
    "Vitamina D mcg": 0,
    "Marca": "",
    "Vitamina A (RAE) mcg": 0,
    "Equivalente de folato mcg": 7.88,
    "Fibra alimentar g": 1.68,
    "Ácidos graxos monoinsaturados g": 0.17,
    "Ácidos graxos trans g": null,
    "Nome Científico": "Oryza sativa L.",
    "Carboidrato total g": 79.1,
    "Código": "C0001A",
    "Proteína g": 7.04,
    "Ácidos graxos polinsaturados g": 0.17,
    "Ácidos graxos saturados g": 0.17,
    "Energia kJ": 1467,
    "Álcool g": 0,
    "Niacina mg": 1.02,
    "Ferro mg": 0.46,
    "Magnésio mg": 29.5,
    "Vitamina B12 mcg": 0,
    "Zinco mg": 1.23,
    "Cálcio mg": 4.8,
    "Cinzas g": 0.48,
    "Sódio mg": 1.12,
    "Nome": "Arroz, polido, cru (média de diferentes cultivares)",
    "Fósforo mg": 92.8,
    "Potássio mg": 59.3,
    "Vitamina C mg": 0,
    "Sal de adição g": 0,
    "Energia kcal": 346,
    "Vitamina B6 mg": 0.06
  },
  {
    "Sódio mg": 0.19,
    "Vitamina A (RAE) mcg": 355,
    "Zinco mg": 0.14,
    "Vitamina B6 mg": 0.07,
    "Ácidos graxos monoinsaturados g": 0.03,
    "Carboidrato total g": 5.03,
    "Equivalente de folato mcg": 12.9,
    "Carboidrato disponível g": 3.01,
    "Umidade g": 93.2,
    "Riboflavina mg": null,
    "Ácidos graxos saturados g": 0.04,
    "Fibra alimentar g": 2.02,
    "Ácidos graxos trans g": 0,
    "Grupo": "Vegetais e derivados",
    "Potássio mg": 225,
    "Vitamina D mcg": 0,
    "Vitamina B12 mcg": 0,
    "Vitamina A (RE) mcg": 710,
    "Proteína g": 1.05,
    "Cinzas g": 0.54,
    "Cálcio mg": 9.64,
    "Nome Científico": "Curcubita spp.",
    "Colesterol mg": 0,
    "Energia kJ": 92,
    "Selênio mcg": 1.1,
    "Vitamina C mg": 4.58,
    "Nome": "Abóbora, s/ casca, s/ sementes, crua",
    "Nome (Inglês)": "Pumpkin, squash, peeled, seedless, raw",
    "Niacina mg": null,
    "Sal de adição g": 0,
    "Ácidos graxos polinsaturados g": 0.02,
    "Cobre mg": 0.05,
    "Alfa-tocoferol (Vitamina E) mg": 1.91,
    "Magnésio mg": 5.54,
    "Código": "C0001B",
    "Açúcar de adição g": 0,
    "Fósforo mg": 19.2,
    "Lipídios g": 0.18,
    "Energia kcal": 22,
    "Ferro mg": 0.22,
    "Marca": "",
    "Álcool g": 0,
    "Tiamina mg": null
  },
];


const CardAlimento = ({ item }) => {
  const [counter, setCounter] = useState(0)
  return (
    <View style={styles.container}>
      {/* Início do card (imagem + descrição do alimento) */}
      <View style={styles.card}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png' }}
            style={{ width: 64, height: 64, resizeMode: 'center' }}
          />

          <Text style={styles.description}>
            <Text>{item.Nome}</Text>

          </Text>
        </View>

      </View>
      {/* Fim do card e início do container do contador*/}
      <View style={[styles.card, styles.containerAdd]}>
        <TouchableOpacity
          onPress={() => { if (counter >= 0) setCounter(counter + 1) }}
          style={styles.button}>
          <Text
            style={{
              color: '#ADBF24',
              fontWeight: 'bold',
              fontSize: 30,
            }}>+</Text>
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold' }}>
          {counter >= 10 ? counter / 10 + ' kg' : counter * 100 + ' gramas'}
        </Text>
        <TouchableOpacity
          onPress={() => {
            if (counter > 0)
              setCounter(counter - 1)
          }}
          style={styles.button}>
          <Text
            style={{
              color: '#ADBF24',
              fontWeight: 'bold',
              fontSize: 30,
            }}>-</Text>
        </TouchableOpacity>

      </View>

    </View>
  )

}

const AlimentoList = () => {
  const renderItem = ({ item }) => {
    return (<CardAlimento item={item} />)

  }
  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.Código} />
  )
}

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 4,
    flexDirection: 'row',
    marginVertical: 15,
    justifyContent: 'space-between'
  },
  card: {
    width: width / 1.5,
    height: width / 4.25,
    backgroundColor: '#ADBF24',
    borderRadius: width / 25,
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  containerAdd: {
    width: width / 5,
    flexDirection: 'column',
  },
  button: {
    width: width / 12,
    height: width / 12,
    borderRadius: 1000,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    marginVertical: 5
  },
  description: {
    color: 'white',
    fontSize: 20,
    marginHorizontal: 30,
    marginRight: width / 10,
  },
  image: {

  }
})

export default AlimentoList