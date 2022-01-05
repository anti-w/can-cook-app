import { createStore, combineReducers } from 'redux'

import groupsReducer from './reducers/groups'

const reducers = combineReducers({
  filter: groupsReducer
})

const storeConfig = () => createStore(reducers)

export default storeConfig