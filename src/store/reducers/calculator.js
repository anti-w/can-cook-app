import { ADD_ALIMENTO } from '../actions/actionTypes'

const initialState = {
  alimentos: [{ nome: '' }]
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALIMENTO:
      return {
        ...state,

      }
    default: return state

  }
}

export default reducer