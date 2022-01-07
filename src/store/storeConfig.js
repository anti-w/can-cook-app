import { createStore, combineReducers } from 'redux'

import groupsReducer from './reducers/groups'
import calculatorReducer from './reducers/calculator'

const reducers = combineReducers({
  filter: groupsReducer,
  calculator: calculatorReducer
})

const storeConfig = () => createStore(reducers)

export default storeConfig