import { createSlice } from '@reduxjs/toolkit'

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    value: undefined
  },
  reducers: {
    saveDetails: (state, action) => {
      state.value = action.payload
    },
    deleteDetails: (state) => {
      state.value = ''
    }
  }
})

export const { saveDetails, deleteDetails } = accountSlice.actions

export default accountSlice.reducer
