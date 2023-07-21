import { configureStore, combineReducers } from '@reduxjs/toolkit'

const reducers = combineReducers({})

const store = configureStore({
  reducer: reducers,
  devTools: true
})

export default store
