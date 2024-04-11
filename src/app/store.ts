import {configureStore} from '@reduxjs/toolkit'
import dateService from './dateService'

export default configureStore({
  reducer: {
    dateInfo: dateService
  }
})