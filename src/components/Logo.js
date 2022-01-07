import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'


const Logo = ({ carboidrato, alimento, itens }) => {
  return (
    <View style={{ height: 30, backgroundColor: 'blue' }}>
      <Text style={{ color: 'white' }}>
        {((carboidrato).toFixed(1))}
      </Text>

    </View>
  )

}

const mapStateToProps = ({ calculator }) => {
  return {
    carboidrato: calculator.carboidrato,
    alimento: calculator.alimento,
    itens: calculator.itens
  }
}

export default connect(mapStateToProps)(Logo)