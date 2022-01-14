import { createSlice } from '@reduxjs/toolkit'

const initialState = [{

}]

const foodSlice = createSlice({
  name: 'foods',
  initialState,
  reducers: {
    foodAdd(state, action) {
      state.push(action.payload)
    }
  }
})

export const { foodAdd } = foodSlice.actions

export default foodSlice.reducer