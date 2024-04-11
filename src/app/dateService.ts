import {createSlice} from '@reduxjs/toolkit'

export const dateService = createSlice({
  name: 'dateInfo',
  initialState: {
    service: "",
    slot: ""
  }, 
  reducers : {
    addService: (state, action) => {
      state.service = action.payload
    },
    addSlot: (state, action) => {
      state.slot = action.payload
    }
  }
})

export const {addService, addSlot} = dateService.actions

export default dateService.reducer