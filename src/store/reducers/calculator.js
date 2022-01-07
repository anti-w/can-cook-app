import { ADD_ALIMENTO } from '../actions/actionTypes'

const initialState = {
  carboidrato: 0,
  proteina: 0,
  calorias: 0,
  lipidios: 0,
  itens: 0

}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALIMENTO:
      return {
        ...state,
        carboidrato: state.carboidrato + action.payload.carboidrato,
        proteina: state.proteina + action.payload.proteina,
        calorias: state.calorias + action.payload.calorias,
        lipidios: state.lipidios + action.payload.lipidios,
        itens: state.itens + action.payload.itens
      }
    default: return state

  }
}

export default reducer