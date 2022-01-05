import { SELECT_GROUP } from '../actions/actionTypes'

const initialState = {
  group: 'alimentos',
  uri: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_GROUP:
      return {
        ...state,
        group: action.payload.group,
        uri: action.payload.uri
      }

    default:
      return state
  }
}

export default reducer