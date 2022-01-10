import { createSlice } from '@reduxjs/toolkit'

const initialState = [{
  id: 'djas',
  nome: 'sei lá',
  carboidrato: 0
}]

const foodSlice = createSlice({
  name: 'foods',
  initialState,
  reducers: {
    foodAdd(state, action) {
      state.push(action.payload)
      state.length + 1
      console.log(state.length)
    }
  }
})

export const { foodAdd } = foodSlice.actions

export default foodSlice.reducer