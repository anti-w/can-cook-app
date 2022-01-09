import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  grupo: '',
  uri: ''
}

const groupSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    groupAdd(state, action) {
      state.grupo = action.payload.grupo
      state.uri = action.payload.uri
    }
  }
})

export const { groupAdd } = groupSlice.actions

export default groupSlice.reducer