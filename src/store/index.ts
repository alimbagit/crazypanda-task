import { configureStore } from '@reduxjs/toolkit'
import reducerTable from './reducer'

const store = configureStore({
  reducer: {
    reducerTable: reducerTable
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
