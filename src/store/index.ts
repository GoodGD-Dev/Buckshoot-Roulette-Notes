import { configureStore } from '@reduxjs/toolkit'
import generateItemsReducer from './reducers/generateItems'
import calculaReducer from './reducers/calcInputs'

const store = configureStore({
  reducer: {
    generateItems: generateItemsReducer,
    calcInputs: calculaReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
