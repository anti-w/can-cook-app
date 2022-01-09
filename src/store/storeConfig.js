import { configureStore } from '@reduxjs/toolkit'
import foodSlice from './reducers/foodSlice'
import groupSlice from './reducers/groupSlice'


export default configureStore({
  reducer: {
    foods: foodSlice,
    groups: groupSlice
  },
})
