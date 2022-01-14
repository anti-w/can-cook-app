import { configureStore } from '@reduxjs/toolkit'
import foodSlice from './reducers/foodSlice'
import groupSlice from './reducers/groupSlice'
import totalSlice from './reducers/totalSlice'


export default configureStore({
  reducer: {
    foods: foodSlice,
    groups: groupSlice,
    total: totalSlice
  },
})
