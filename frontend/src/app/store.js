import { configureStore } from '@reduxjs/toolkit'
import profileReducer from '../features/slices/profileSlice'
import tokenReducer from '../features/slices/tokenSlice'
import accountReducer from '../features/slices/accountSlice'

export default configureStore({
  reducer: {
    profile: profileReducer,
    token: tokenReducer,
    account: accountReducer
  }
})
