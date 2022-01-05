import { SELECT_GROUP } from '../actions/actionTypes'

const initialState = {
  group: 'Fast food',
  uri: 'https://res.cloudinary.com/dscztnlqq/image/upload/v1641292303/can-eat/burger_eger8n.png'
}

/* 
  O reducer é quem lida com as action disparadas pelos dipatchs e altera o estado de acordo com o tipo da action e o payload com o novo estado, sendo necessário fazer uma cópia do anterior com o uso do operator spread (...)

*/
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