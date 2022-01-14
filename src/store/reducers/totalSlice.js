import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  carbTotal: 0,
  calTotal: 0,
  lipTotal: 0,
  proTotal: 0,

}

const totalSlice = createSlice({
  name: 'total',
  initialState,
  reducers: {
    sum(state, action) {
      state.carbTotal += action.payload.carboidrato
      state.calTotal += action.payload.calorias
      state.lipTotal += action.payload.lipidios
      state.proTotal += action.payload.proteina

    }
  }
})

export const { sum } = totalSlice.actions

export default totalSlice.reducer