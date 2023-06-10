import { configureStore } from '@reduxjs/toolkit'
import roleReducer from "./features/roleSlice"

export const store = configureStore({
  reducer: {
    role : roleReducer
  },
})