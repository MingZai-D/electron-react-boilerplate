import { configureStore } from '@reduxjs/toolkit'
import driverConfig from "./reducer";

const store = configureStore({
  reducer: {
    driverConfig
  }
})

export default store