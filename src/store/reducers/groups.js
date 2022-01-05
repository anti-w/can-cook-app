import { SELECT_GROUP } from '../actions/actionTypes'

const initialState = {
  group: 'alimentos'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_GROUP:
      return {

        group: action.payload
      }

    default:
      return state
  }
}

export default reducer